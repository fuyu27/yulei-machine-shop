import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { LABELS } from '../data/resumeContent';

function setupScene(mountRef, setLoading) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  if (window.innerWidth <= 768) {
    camera.position.set(11, 6, 11);
  } else {
    camera.position.set(9, 6, 9);
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  mountRef.current.appendChild(renderer.domElement);

  const outlinedMeshes = [];
  const defaultOutlines = [];
  const navigationMeshes = {};
  const outlinePairs = {};
  const backgroundColor = new THREE.Color(0x233C67);
  scene.background = backgroundColor;

  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/sunset_fairway_1k.hdr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = backgroundColor;
  });

  const loader = new GLTFLoader();
  // Load optimized GLB model
  loader.load('/models/yulei_machine_shop.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, 0, 0);

    const interactiveGroups = {};

    gltf.scene.traverse((child) => {
      if (child.name && child.name.startsWith('ix_')) {
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
  });

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight2.position.set(-5, 8, -5);
  scene.add(directionalLight2);

  return { scene, camera, renderer, navigationMeshes, outlinedMeshes, outlinePairs, defaultOutlines };
}

export default setupScene;
