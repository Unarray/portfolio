import { createBallScene, type SkillScene } from "./skills.three";
import { technologies } from "$lib/config/techno";
import { Clock, MathUtils, WebGLRenderer } from "three";
import { isDomElementVisible } from "./skills.util";
import { floatingAnimationConfig } from "./skils.const";

export const useSkillsRenderer = (canvas: HTMLCanvasElement, canvasContainer: HTMLDivElement): void => {
  const scenes: {seed: number; scene: SkillScene}[] = [];

  // Generate skills containers elements
  for (const technologie of technologies) {
    const div = document.createElement("div");
    div.classList.add("w-32", "h-32");

    canvasContainer.appendChild(div);
    scenes.push({
      seed: Math.random() * 10000,
      scene: createBallScene(div, technologie.iconURL)
    });
  }

  // Create renderer
  const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });

  const clock = new Clock();
  const { speed, rotationIntensity, floatIntensity, floatingRange } = floatingAnimationConfig;

  const animate: FrameRequestCallback = () => {
    requestAnimationFrame(animate);
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setScissorTest(true);

    for (const { seed, scene } of scenes) {
      scene.control.update();

      // Floating animation
      const t = seed + clock.getElapsedTime();

      scene.rotation.x = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;
      scene.rotation.y = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;
      scene.rotation.z = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;

      let yPosition = Math.sin((t / 4) * speed) / 10;
      yPosition = MathUtils.mapLinear(yPosition, -0.1, 0.1, floatingRange[0], floatingRange[1]);
      scene.position.y = yPosition * floatIntensity;

      // Render scene in his contaning element
      const element = scene.element;
      const canvasRect = renderer.domElement.getBoundingClientRect();
      const sceneRect = element.getBoundingClientRect();

      if (!isDomElementVisible(canvasRect)) return;

      const width = sceneRect.width;
      const height = sceneRect.height;
      const left = sceneRect.left - canvasRect.left;
      const bottom = canvasRect.bottom - sceneRect.bottom;

      renderer.setViewport(left, bottom, width, height);
      renderer.setScissor(left, bottom, width, height);
      renderer.render(scene, scene.camera);
    }
  };

  animate(0);
};