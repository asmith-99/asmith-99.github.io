import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import starData from "./stars_all.json";

export function renderStars(canvasContainer) {
  const scene = new THREE.Scene();
  const rect = canvasContainer.getBoundingClientRect();
  const camera = new THREE.PerspectiveCamera(
    45,
    rect.width / rect.height,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(rect.width, rect.height);
  canvasContainer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  const numStars = 7000;

  const pointsData = starData.stars
    .slice(0, numStars)
    .map((starEntry) =>
      new THREE.Vector3().setFromSphericalCoords(
        100,
        Math.PI / 2 - (starEntry.dec * Math.PI) / 180,
        (starEntry.ra * Math.PI) / 180
      )
    );

  const colors = starData.stars
    .slice(0, numStars)
    .flatMap((starEntry) =>
      new THREE.Color().setStyle(starEntry.c ?? "#FFFFFF").toArray()
    );

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

  const SCALING_CONST = 5;

  const sizes = starData.stars
    .slice(0, numStars)
    .map((starEntry) => SCALING_CONST * Math.sqrt(Math.exp(-starEntry.am)));

  const geo = new THREE.BufferGeometry();
  geo.setFromPoints(pointsData);
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));
  const points = new THREE.Points(geo, shaderMaterial);
  scene.add(points);

  camera.position.z = 1;
  controls.update();

  function animate() {
    //points.rotation.y += 0.0001;
    controls.update();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  return renderer.domElement;
}
