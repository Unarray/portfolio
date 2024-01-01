import {
  AmbientLight,
  Color,
  DirectionalLight,
  Euler,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  TextureLoader,
  Vector3
} from "three";
import { Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";

export class SkillScene extends Scene {

  public readonly element: HTMLDivElement;

  public readonly camera: PerspectiveCamera;

  public readonly control: OrbitControls;

  constructor(element: HTMLDivElement, camera: PerspectiveCamera, control: OrbitControls) {
    super();
    this.element = element;
    this.camera = camera;
    this.control = control;
  }

}

export const createBallScene = (element: HTMLDivElement, imageURL: string): SkillScene => {
  // Setting up scene
  const camera = new PerspectiveCamera(24);
  camera.position.set(0, 0, 6);

  const controls = new OrbitControls(camera, element);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.04;

  const scene = new SkillScene(element, camera, controls);

  // Create "ball" geometry
  const geometry = new IcosahedronGeometry(1, 1);
  const material = new MeshStandardMaterial({ color: "#fff8eb", flatShading: true });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);

  // Create skill image to show on the ball
  const decalGeometry = new DecalGeometry(
    mesh,
    new Vector3(0, 0, 1),
    new Euler(),
    new Vector3(1.1, 1.1, 1)
  );
  const decalTexture = new TextureLoader().load(imageURL);
  const decalMaterial = new MeshStandardMaterial({
    map: decalTexture,
    transparent: true,
    flatShading: true,
    polygonOffset: true,
    polygonOffsetFactor: -1
  });
  const decalMesh = new Mesh(decalGeometry, decalMaterial);
  decalMesh.castShadow = true;
  scene.add(decalMesh);

  // Add light
  const ambientLight = new AmbientLight(new Color("white"), 0.2);
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(new Color("white"), 4);
  directionalLight.position.add(new Vector3(2, 2, 0));
  camera.add(directionalLight);
  scene.add(camera);

  return scene;
};