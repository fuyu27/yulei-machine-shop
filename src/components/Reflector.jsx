import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

function addReflector(scene) {
  const geometry = new THREE.PlaneGeometry(100, 100);
  
  const planeMat = new THREE.MeshBasicMaterial({
    color: 0x233C67,
    transparent: false,
  });

  const floor = new THREE.Mesh(geometry, planeMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  scene.add(floor);
}

export default addReflector;
