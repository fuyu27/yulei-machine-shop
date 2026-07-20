import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { LABELS } from '../data/resumeContent';
import addTitleText from './TitleText';

function setupScene(mountRef, setLoading) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  if (window.innerWidth <= 768) {
    camera.position.set(7, 3.9, 7);
  } else {
    camera.position.set(5.5, 3.7, 5.5);
  }
  // Orient toward the room now (OrbitControls will keep this target) so the
  // title text can be billboarded against the actual initial view.
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;
  mountRef.current.appendChild(renderer.domElement);

  const outlinedMeshes = [];
  const defaultOutlines = [];
  const navigationMeshes = {};
  const outlinePairs = {};
  const backgroundColor = new THREE.Color(0x233C67);
  scene.background = backgroundColor;

  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = backgroundColor;
  });

  // Setup DRACO loader for compressed GLB files
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  // Load optimized GLB model
  console.log('Starting to load GLB model...');
  loader.load(
    // Simplified + Draco build (6.6MB / 1.3M tris vs the source's 27MB / 7.1M);
    // regenerate from the source GLB with scripts in the repo history if the
    // model changes: gltf-transform optimize --join false --flatten false --instance false
    '/models/yulei_machine_shop_optimized.glb',
    (gltf) => {
      console.log('GLB model loaded successfully!', gltf);
      scene.add(gltf.scene);
      gltf.scene.scale.set(1, 1, 1);
      gltf.scene.position.set(0, 0, 0);

      const interactiveGroups = {};

      gltf.scene.traverse((child) => {
      // The GLB wraps each hotspot in a duplicate group (e.g. ix_mbot:1 -> ix_mbot);
      // only register the innermost ix_ group so meshes aren't collected twice.
      const hasIxChild = child.children && child.children.some((c) => c.name && c.name.startsWith('ix_'));
      if (child.name && child.name.startsWith('ix_') && !hasIxChild) {
        interactiveGroups[child.name] = child;
        console.log(`Found interactive node: ${child.name} (type: ${child.type})`);

        const groupMeshes = [];
        child.traverse((descendant) => {
          if (descendant.isMesh) {
            descendant.userData.interactiveName = child.name;
            outlinedMeshes.push(descendant);
            groupMeshes.push(descendant);

            console.log(`  - Added mesh: ${descendant.name || 'unnamed'} to ${child.name}`);
          }
        });

        navigationMeshes[child.name] = groupMeshes;
        outlinePairs[child.name] = groupMeshes;
        console.log(`✓ Interactive object: ${child.name} -> ${LABELS[child.name] || 'No label'} (${groupMeshes.length} meshes)`);
      }
    });

    console.log('Total interactive groups:', Object.keys(interactiveGroups).length);
    console.log('Total interactive meshes:', outlinedMeshes.length);
    setLoading(false);
  },
  (progress) => {
    console.log('Loading progress:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
  },
  (error) => {
    console.error('Error loading GLB model:', error);
    setLoading(false);
  });

  addTitleText(scene, camera);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.25);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
  directionalLight2.position.set(-5, 8, -5);
  scene.add(directionalLight2);

  return { scene, camera, renderer, navigationMeshes, outlinedMeshes, outlinePairs, defaultOutlines };
}

export default setupScene;
