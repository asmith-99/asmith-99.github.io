import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import starData from "./stars_all_reduced_precision.json";

export function renderStars(canvasContainer) {
  THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1); // the dataset uses z-up (physics) convention
  const scene = new THREE.Scene();
  scene.background = new THREE.Color().setStyle("#0d0b1c");
  const rect = canvasContainer.getBoundingClientRect();
  const camera = new THREE.PerspectiveCamera(
    75,
    rect.width / rect.height,
    0.1,
    1000
  );
  camera.up.set(0, 0, 1); // match the camera to the z-up convention
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(rect.width, rect.height);
  canvasContainer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.rotateSpeed = -0.15;

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      sizeMul: { value: 0.75 },
      floorSize: { value: 3.0 },
      starDimmingPower: { value: 2.0 },
      baseOpacity: { value: 0.5 },
      skewWeight: { value: 0.5 },
      skewColor: new THREE.Uniform(new THREE.Vector3(1.0, 1.0, 1.0)),
    },
    vertexShader: `
attribute float size;
varying vec3 vColor;
varying float vOpacity;
uniform float floorSize;
uniform float starDimmingPower;
uniform float sizeMul;
void main() {
  vColor = color;
  float modifiedSize = size * sizeMul;
  if (modifiedSize < floorSize) {
    vOpacity = pow((modifiedSize / floorSize), starDimmingPower);
  } else {
    vOpacity = 1.0;
  }
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  if (modifiedSize < floorSize) {
   gl_PointSize = floorSize / -mvPosition.z;
  } else {
   gl_PointSize = modifiedSize / -mvPosition.z;
  }
  gl_Position = projectionMatrix * mvPosition;
}`,
    fragmentShader: `
varying vec3 vColor;
varying float vOpacity;
uniform float baseOpacity;
uniform vec3 skewColor;
uniform float skewWeight;
void main() {
  gl_FragColor = (vec4( vColor, vOpacity * baseOpacity ) + skewWeight * vec4( skewColor, vOpacity * baseOpacity )) / (1.0 + skewWeight);
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
