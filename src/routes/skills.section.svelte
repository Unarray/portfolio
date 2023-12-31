<script lang="ts">
  import { technologies } from "$lib/config/techno";
  import { onMount } from "svelte";
  import {
    AmbientLight,
    Color,
    DirectionalLight,
    Euler,
    IcosahedronGeometry,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    TextureLoader,
    Vector3,
    WebGLRenderer
  } from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";
  import Stats from "three/addons/libs/stats.module.js";

  class SkillScene extends Scene {

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

  let canvas: HTMLCanvasElement;
  let canvasContainer: HTMLDivElement;

  const createScene = (element: HTMLDivElement, imageURL: string): SkillScene => {
    const camera = new PerspectiveCamera(24);
    camera.position.set(0, 0, 6);

    const controls = new OrbitControls(camera, element);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.04;

    const scene = new SkillScene(element, camera, controls);

    const geometry = new IcosahedronGeometry(1, 1);
    const material = new MeshStandardMaterial({ color: "#fff8eb", flatShading: true });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const decalGeometry = new DecalGeometry(
      mesh,
      new Vector3(0, 0, 1),
      new Euler(),
      new Vector3(1.1, 1.1, 1)
    );
    const decalMaterial = new MeshStandardMaterial({
      map: new TextureLoader().load(imageURL),
      transparent: true,
      flatShading: true,
      polygonOffset: true,
      polygonOffsetFactor: -1
    });
    const decalMesh = new Mesh(decalGeometry, decalMaterial);
    decalMesh.castShadow = true;
    scene.add(decalMesh);

    const ambientLight = new AmbientLight(new Color("white"), 0.2);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(new Color("white"), 4);
    directionalLight.position.add(new Vector3(2, 2, 0));
    camera.add(directionalLight);
    scene.add(camera);

    return scene;
  };

  const isVisible = (domRect: DOMRect): boolean => {
    return domRect.bottom >= 0 && domRect.top <= window.innerHeight;
  };


  onMount(() => {
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    const scenes: SkillScene[] = [];

    for (const technologie of technologies) {
      const div = document.createElement("div");
      div.classList.add("w-32", "h-32");

      canvasContainer.appendChild(div);

      scenes.push(createScene(div, technologie.iconURL));
    }

    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.clearColor();

    const animate: FrameRequestCallback = () => {
      requestAnimationFrame(animate);
      renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      renderer.setScissorTest(false);
      renderer.clear();
      renderer.setScissorTest(true);

      for (const scene of scenes) {
        scene.control.update();

        const element = scene.element;
        const canvasRect = renderer.domElement.getBoundingClientRect();
        const sceneRect = element.getBoundingClientRect();

        if (!isVisible(canvasRect)) {
          return;
        }

        const width = sceneRect.width;
        const height = sceneRect.height;
        const left = sceneRect.left - canvasRect.left;
        const bottom = canvasRect.bottom - sceneRect.bottom;

        renderer.setViewport(left, bottom, width, height);
        renderer.setScissor(left, bottom, width, height);
        renderer.render(scene, scene.camera);
      }
      stats.update();
    };

    animate(0);
  });
</script>

<section id="skills" class="box-border">
  <h1 class="text-xxl text-center mb-10">Compétences</h1>

  <div bind:this={canvasContainer} class="flex flex-1 items-center justify-center flex-wrap w-3/5 lg:w-full mx-auto">
    <canvas bind:this={canvas} class="absolute -z-10"></canvas>
  </div>
</section>