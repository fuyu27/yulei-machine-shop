import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import InfoPanel from './InfoPanel';
import addReflector from './Reflector';
import applyPostProcessing from './PostProcessing';
import setupScene from './SceneSetup';
import { applyOrbitControls } from './MouseControls';
import { applyOutlineEffect } from './OutlineEffect';
import LoadingScreen from './LoadingScreen';
import HoverLabel from './HoverLabel';
import HamburgerMenu from './HamburgerMenu';
import TutorialOverlay from './TutorialOverlay';
import ContactForm from './ContactForm';
import SocialButtons from './SocialButtons';
import LicenseBadge from './LicenseBadge';
import { LABELS } from '../data/resumeContent';
import { SHELF_GROUP_KEY, resolveShelfInteraction } from './shelfInteraction';

const CAMERA_PAN_DURATION = 900; // ms
// Extra yaw applied to the shelf-facing camera, rotating it toward its own
// right (positive angle around world Y rotates the view direction rightward).
// 0 = dead-on front view of the shelf.
const SHELF_VIEW_YAW_DEG = 0;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function startCameraTween(tweenRef, camera, controls, toPosition, toTarget, duration, onComplete) {
  tweenRef.current = {
    fromPos: camera.position.clone(),
    toPos: toPosition.clone(),
    fromTarget: controls.target.clone(),
    toTarget: toTarget.clone(),
    startTime: performance.now(),
    duration,
    onComplete,
  };
}

function stepCameraTween(tweenRef, camera, controls) {
  const tween = tweenRef.current;
  if (!tween) return;

  const t = Math.min((performance.now() - tween.startTime) / tween.duration, 1);
  const eased = easeInOutCubic(t);
  camera.position.lerpVectors(tween.fromPos, tween.toPos, eased);
  controls.target.lerpVectors(tween.fromTarget, tween.toTarget, eased);

  if (t >= 1) {
    tweenRef.current = null;
    controls.enabled = true;
    tween.onComplete && tween.onComplete();
  }
}

function computeGroupBounds(meshes) {
  if (!meshes || meshes.length === 0) return null;
  const box = new THREE.Box3();
  meshes.forEach((mesh) => box.expandByObject(mesh));
  return { center: box.getCenter(new THREE.Vector3()), size: box.getSize(new THREE.Vector3()) };
}

// Measured from the GLB: the shelf's bounding box is centered near
// (0.2, 0.55, 1.66), shallow along X and long along Z, backed against the
// room's low-X wall — so its front faces +X. If the model is re-exported
// with the shelf moved/rotated, remeasure and update this direction.
const SHELF_FRONT_DIRECTION = new THREE.Vector3(1, 0, 0);
// How far back from the shelf the camera stops, as a multiple of the shelf's
// largest dimension. Smaller = tighter zoom.
const SHELF_ZOOM_FACTOR = 1.0;

function getShelfFrontNormal() {
  return SHELF_FRONT_DIRECTION.clone()
    .applyAxisAngle(new THREE.Vector3(0, 1, 0), THREE.MathUtils.degToRad(SHELF_VIEW_YAW_DEG));
}

// Frames the whole shelf front-on, standing off far enough to fit its
// largest dimension in view with a little margin.
function getShelfCameraTarget(shelfBounds, frontNormal) {
  const { center, size } = shelfBounds;
  const direction = frontNormal || SHELF_FRONT_DIRECTION;

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const distance = maxDim * SHELF_ZOOM_FACTOR;
  const position = center.clone().add(direction.clone().multiplyScalar(distance));
  position.y = center.y + size.y * 0.2; // slightly above center, mild downward tilt

  return { position, target: center.clone() };
}

function ModelViewer() {
  const mountRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const hoveredMesh = useRef(null);
  const cameraTweenRef = useRef(null);
  const originalCameraStateRef = useRef(null);
  const returnCameraRef = useRef(() => {});
  // Shelf items are treated as one unit: the first click on any of them just
  // pans to a front-on view of the whole shelf. Once focused, a second click
  // on an item opens its panel directly.
  const shelfFocusedRef = useRef(false);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [hoverLabel, setHoverLabel] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isTutorialVisible, setIsTutorialVisible] = useState(true);

  useEffect(() => {
    raycaster.current.params.Mesh.threshold = 0.5;
    raycaster.current.params.Line.threshold = 0.5;
    raycaster.current.params.Points.threshold = 0.5;

    const { scene, camera, renderer, navigationMeshes, outlinedMeshes, defaultOutlines, outlinePairs } = setupScene(mountRef, setLoading)
    const controls = applyOrbitControls(camera, renderer)
    const { outlinePass, composer } = applyPostProcessing(renderer, scene, camera, outlinedMeshes)
    addReflector(scene)

    returnCameraRef.current = () => {
      if (originalCameraStateRef.current && !cameraTweenRef.current) {
        controls.enabled = false;
        const origin = originalCameraStateRef.current;
        originalCameraStateRef.current = null;
        shelfFocusedRef.current = false;
        startCameraTween(cameraTweenRef, camera, controls, origin.position, origin.target, CAMERA_PAN_DURATION, () => {
          controls.enabled = true;
        });
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      stepCameraTween(cameraTweenRef, camera, controls);
      controls.update();
      raycaster.current.setFromCamera(mouse.current, camera);
      applyOutlineEffect(raycaster, outlinePairs, outlinePass, navigationMeshes, hoveredMesh, outlinedMeshes, defaultOutlines, shelfFocusedRef);
      composer.render();
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (hoveredMesh.current) {
        const rawName = hoveredMesh.current.userData?.interactiveName || hoveredMesh.current.name;
        const effectiveName = resolveShelfInteraction(rawName, shelfFocusedRef.current);
        if (effectiveName && LABELS[effectiveName]) {
          setHoverLabel({
            text: LABELS[effectiveName],
            x: event.clientX,
            y: event.clientY
          });
        } else {
          setHoverLabel(null);
        }
      } else {
        setHoverLabel(null);
      }
    };
    document.querySelector("canvas").addEventListener('mousemove', onMouseMove);

    // Distinguish real clicks from the click event fired at the end of an
    // orbit drag, so rotating the view while zoomed in doesn't exit the zoom.
    let pointerDownAt = null;
    const onPointerDown = (event) => {
      pointerDownAt = { x: event.clientX, y: event.clientY };
    };
    document.querySelector("canvas").addEventListener('pointerdown', onPointerDown);

    const onClick = (event) => {
      const wasDrag = pointerDownAt &&
        Math.hypot(event.clientX - pointerDownAt.x, event.clientY - pointerDownAt.y) > 5;
      pointerDownAt = null;
      if (wasDrag) return;

      if (!isPanelOpen && !cameraTweenRef.current) {
        const rawName = hoveredMesh.current
          ? (hoveredMesh.current.userData?.interactiveName || hoveredMesh.current.name)
          : null;
        const effectiveName = rawName ? resolveShelfInteraction(rawName, shelfFocusedRef.current) : null;

        if (!effectiveName) {
          // Clicked empty space or the inert shelf body — if zoomed in on the
          // shelf, that's the escape hatch: pan back out.
          if (shelfFocusedRef.current) returnCameraRef.current();
          return;
        }

        if (effectiveName === SHELF_GROUP_KEY) {
          const shelfBounds = computeGroupBounds(navigationMeshes[SHELF_GROUP_KEY]);
          if (!shelfBounds) return;

          if (!originalCameraStateRef.current) {
            originalCameraStateRef.current = {
              position: camera.position.clone(),
              target: controls.target.clone(),
            };
          }

          const frontNormal = getShelfFrontNormal();
          const { position, target } = getShelfCameraTarget(shelfBounds, frontNormal);
          controls.enabled = false;
          startCameraTween(cameraTweenRef, camera, controls, position, target, CAMERA_PAN_DURATION, () => {
            controls.enabled = true;
            shelfFocusedRef.current = true;
          });
          return;
        }

        if (LABELS[effectiveName]) {
          setPanelContent(effectiveName);
          setIsPanelOpen(true);
        }
      }
    };
    document.querySelector("canvas").addEventListener('click', onClick);

    const handleOpenContactForm = () => {
      setIsContactFormOpen(true);
    };
    window.addEventListener('openContactForm', handleOpenContactForm);

    const handleOpenInfoPanel = (event) => {
      setPanelContent(event.detail);
      setIsPanelOpen(true);
    };
    window.addEventListener('openInfoPanel', handleOpenInfoPanel);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('openContactForm', handleOpenContactForm);
      window.removeEventListener('openInfoPanel', handleOpenInfoPanel);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && <HamburgerMenu />}
      {!loading && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          textAlign: 'center',
          pointerEvents: 'none',
        }}>
          <p style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
            fontWeight: '400',
            color: '#ffffffcc',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            margin: 0,
            letterSpacing: '0.01em',
          }}>
            Hover slowly to find interactive elements!
          </p>
        </div>
      )}
      {isPanelOpen && (
        <InfoPanel
          onClose={() => {
            setIsPanelOpen(false);
            returnCameraRef.current();
          }}
          contentKey={panelContent}
        />
      )}
      {isContactFormOpen && <ContactForm onClose={() => setIsContactFormOpen(false)} />}
      {hoverLabel && <HoverLabel text={hoverLabel.text} x={hoverLabel.x} y={hoverLabel.y} />}
      {!loading && <SocialButtons />}
      {!loading && <LicenseBadge />}
      {!loading && <TutorialOverlay isVisible={isTutorialVisible} onDismiss={() => setIsTutorialVisible(false)} />}

      {/* Help Button */}
      {!loading && !isTutorialVisible && (
        <button
          className="faq-button"
          onClick={() => setIsTutorialVisible(true)}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 999
          }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
          <span className="tooltip">Help</span>
        </button>
      )}

      <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}

export default ModelViewer;
