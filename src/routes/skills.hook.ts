import { createBallScene, type SkillScene } from "./skills.three";
import { technologies } from "$lib/config/techno";
import { WebGLRenderer } from "three";
import { isDomElementVisible } from "./skills.util";

export const useSkillsRenderer = (canvas: HTMLCanvasElement, canvasContainer: HTMLDivElement): void => {
  const scenes: SkillScene[] = [];

  // Generate skills containers elements
  for (const technologie of technologies) {
    const div = document.createElement("div");
    div.classList.add("w-32", "h-32");

    canvasContainer.appendChild(div);
    scenes.push(createBallScene(div, technologie.iconURL));
  }

  // Create renderer
  const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });

  const render = (): void => {
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setScissorTest(true);

    for (const scene of scenes) {
      scene.control.update();

      const element = scene.element;
      const canvasRect = renderer.domElement.getBoundingClientRect();
      const sceneRect = element.getBoundingClientRect();

      if (!isDomElementVisible(canvasRect)) {
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
  };

  const animate: FrameRequestCallback = () => {
    render();
    requestAnimationFrame(animate);
  };

  animate(0);
};