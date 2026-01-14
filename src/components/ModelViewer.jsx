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
import { LABELS } from '../data/resumeContent';

function ModelViewer() {
  const mountRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const hoveredMesh = useRef(null);

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

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      raycaster.current.setFromCamera(mouse.current, camera);
      applyOutlineEffect(raycaster, outlinePairs, outlinePass, navigationMeshes, hoveredMesh, outlinedMeshes, defaultOutlines);
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
        const interactiveName = hoveredMesh.current.userData?.interactiveName || hoveredMesh.current.name;
        if (LABELS[interactiveName]) {
          setHoverLabel({
            text: LABELS[interactiveName],
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

    const onClick = () => {
      if (hoveredMesh.current && !isPanelOpen) {
        const interactiveName = hoveredMesh.current.userData?.interactiveName || hoveredMesh.current.name;
        
        if (LABELS[interactiveName]) {
          setPanelContent(interactiveName);
          setIsPanelOpen(true);
        }
      }
    };
    document.querySelector("canvas").addEventListener('click', onClick);

    const handleOpenContactForm = () => {
      setIsContactFormOpen(true);
    };
    window.addEventListener('openContactForm', handleOpenContactForm);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('openContactForm', handleOpenContactForm);
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
          <h1 style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#ffffffff',
            textShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            Yulei's Machine Shop (Portfolio)
          </h1>
          <p style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
            fontWeight: '400',
            color: '#ffffffcc',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            margin: '0.5rem 0 0 0',
            letterSpacing: '0.01em',
          }}>
            Hover slowly to find interactive elements!
          </p>
        </div>
      )}
      {isPanelOpen && <InfoPanel onClose={() => setIsPanelOpen(false)} contentKey={panelContent} />}
      {isContactFormOpen && <ContactForm onClose={() => setIsContactFormOpen(false)} />}
      {hoverLabel && <HoverLabel text={hoverLabel.text} x={hoverLabel.x} y={hoverLabel.y} />}
      {!loading && <SocialButtons />}
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
