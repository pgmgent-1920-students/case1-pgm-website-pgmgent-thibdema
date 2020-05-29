import * as THREE from 'three/build/three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import m1 from '../../3d-models/hammer.glb';

export const main404 = async () => {
  const DOMELEMENT = document.querySelector('#element');
  lol(DOMELEMENT);
} 

const lol = (DOM) => {
  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Canvas Element
  const canvas = renderer.domElement;
  document.body.appendChild(canvas);

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x999999);

  // Camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
  camera.position.set(30, 30, 30);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Controls

  // Lights
  const ambientLight = new THREE.AmbientLight(0x666666);
  scene.add(ambientLight);

  console.log(m1);

  let model = null;

  // Loaders
  const loader = new GLTFLoader();
  loader.load(
    m1,
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
    },
    xhr => {
      console.info(`${xhr.loaded/xhr.total*100}% loaded`);
    },
    error => {
      console.error(error);
    }
  );


  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Model
    if (model) {
      model.rotation.x += 0.01;
      model.rotation.y += 0.02;
    }
    

    // Render
    renderer.render(scene, camera);
  } 
  animate();
}