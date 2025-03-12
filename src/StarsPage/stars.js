import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import starData from "./stars_all_3.json";

export function renderStars(canvasContainer) {
  THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1); // the dataset uses z-up (physics) convention
  const scene = new THREE.Scene();
  scene.background = new THREE.Color().setStyle("#0d0b1c");
  const rect = canvasContainer.getBoundingClientRect();
  const camera = new THREE.PerspectiveCamera(
    45,
    rect.width / rect.height,
    0.1,
    1000
  );
  camera.up.set(0, 0, 1); // match the camera to the z-up convention
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(rect.width, rect.height);
  canvasContainer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: `
attribute float size;
varying vec3 vColor;
void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_PointSize = size * ( 300.0 / -mvPosition.z );
  gl_Position = projectionMatrix * mvPosition;
}`,
    fragmentShader: `
varying vec3 vColor;
void main() {
  gl_FragColor = vec4( vColor, 1.0 );
}`,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    vertexColors: true,
  });

  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starData.starPositions, 3)
  );
  geo.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(starData.starColors, 3)
  );
  geo.setAttribute(
    "size",
    new THREE.Float32BufferAttribute(starData.starSizes, 1)
  );
  const points = new THREE.Points(geo, shaderMaterial);
  scene.add(points);

  camera.position.y = -0.1;
  controls.update();

  function animate() {
    points.rotation.z += 0.00001;
    controls.update();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  return renderer.domElement;
}
