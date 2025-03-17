import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import starData from "./stars_all_reduced_precision.json";

export function renderStars(canvasContainer) {
  THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1); // the dataset uses z-up (physics) convention
  const scene = new THREE.Scene();
  const bgColor = window
    .getComputedStyle(canvasContainer)
    .getPropertyValue("--bg-color");
  scene.background = new THREE.Color().setStyle(bgColor);
  const rect = canvasContainer.getBoundingClientRect();
  const camera = new THREE.PerspectiveCamera(
    75,
    rect.width / rect.height,
    0.1,
    1000
  );
  camera.up.set(0, 0, 1); // match the camera to the z-up convention
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  //renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(rect.width, rect.height);
  canvasContainer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.rotateSpeed = -0.15;

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      sizeMul: { type: "f", value: 0.75 },
      floorSize: { type: "f", value: 4.0 },
      starDimmingPower: { type: "f", value: 2.0 },
      baseOpacity: { type: "f", value: 0.5 },
      skewWeight: { type: "f", value: 0.5 },
      currentTime: { type: "f", value: 0.0 },
      starTwinklingStrength: { type: "f", value: 1.0 },
      skewColor: new THREE.Uniform(new THREE.Vector3(1.0, 1.0, 1.0)),
    },
    vertexShader: `
attribute float size;
attribute float offset;
attribute float ca;
attribute float cb;
attribute float cc;
varying vec3 vColor;
varying float vOpacity;
uniform float floorSize;
uniform float starDimmingPower;
uniform float sizeMul;
uniform float currentTime;
uniform float starTwinklingStrength;
void main() {
  vColor = color;
  float adjustedTime = currentTime + offset;
  float randValue = (sin(adjustedTime*ca) + sin(adjustedTime*cb) + sin(adjustedTime*cc)) / 3.0;
  float modifiedSize = (size + randValue * starTwinklingStrength) * sizeMul;
  if (modifiedSize < floorSize) {
    vOpacity = pow((modifiedSize / floorSize), starDimmingPower);
  } else {
    vOpacity = 1.0;
  };
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
  gl_FragColor = (vec4( vColor, vOpacity * baseOpacity ) + skewWeight * vec4( skewColor, min(vOpacity, 1.0) * baseOpacity )) / (1.0 + skewWeight);
}`,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    vertexColors: true,
  });

  const geo = new THREE.BufferGeometry();
  const starsNumber = starData.starSizes.length;
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
  // arrays related to star twinkling:
  geo.setAttribute(
    "offset",
    new THREE.Float32BufferAttribute(
      randomArray(starsNumber, 0, 2 * Math.PI),
      1
    )
  );

  // ca, cb, and cc are coefficients used to generate a random sine function for each
  // star. This function varies the star's base size, to create a 'twinkling' effect.
  geo.setAttribute(
    "ca",
    new THREE.Float32BufferAttribute(randomArray(starsNumber, 0, 5), 1)
  );
  geo.setAttribute(
    "cb",
    new THREE.Float32BufferAttribute(randomArray(starsNumber, 0, 3), 1)
  );
  geo.setAttribute(
    "cc",
    new THREE.Float32BufferAttribute(randomArray(starsNumber, 0, 0.5), 1)
  );
  const points = new THREE.Points(geo, shaderMaterial);
  scene.add(points);

  camera.position.y = -0.1;
  controls.update();

  const fpsClock = new THREE.Clock();
  const frameDeltaClock = new THREE.Clock();
  fpsClock.start();
  let frames = 0;
  function animate() {
    frames++;
    const deltaTime = frameDeltaClock.getDelta();
    points.rotation.z += 0.01 * deltaTime;
    controls.update();
    renderer.render(scene, camera);
    shaderMaterial.uniforms.currentTime.value = fpsClock.getElapsedTime();
  }

  function onWindowResize() {
    const rect = canvasContainer.getBoundingClientRect();
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    //renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(rect.width, rect.height);
  }

  renderer.setAnimationLoop(animate);
  window.addEventListener("resize", onWindowResize);

  let lastFrameCheckTime = Date.now();
  setInterval(() => {
    const currentTime = Date.now();
    const elapsedSeconds = (currentTime - lastFrameCheckTime) / 1000;
    const fps = frames / elapsedSeconds;
    if (window.fpsDesired) console.log(Math.round(fps));
    frames = 0;
    lastFrameCheckTime = currentTime;
  }, 1000);

  return renderer.domElement;
}

// returns an array of the desired length with values uniformly distributed between min and max.
function randomArray(length, min, max) {
  const array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.random() * (max - min) + min;
  }
  return array;
}
