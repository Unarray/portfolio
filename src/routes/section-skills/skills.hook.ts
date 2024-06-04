import type { SkillBallScene } from "./skills.three";
import { createBallScene } from "./skills.three";
import { Config, selectedTechnologieID } from "$lib/config/technologie";
import { Clock, MathUtils, WebGLRenderer } from "three";
import { isDomElementVisible } from "./skills.util";
import { floatingAnimationConfig } from "./skills.const";
import type { SceneInfo } from "./skills.type";
import { Tooltip } from "@svelte-plugins/tooltips";

// TODO: See how can we improve this code.
// - What can we move to `SkillBallScene` class
// - How can we improve floating animation (ie: code location)
// - How can we improve auto-center orbit control (ie: move it to `SkillBallScene`, have an OOP approach)
// - Skills are flipping to the other side when they are on edge. Is the floating effect the cause?

export const useSkillsRenderer = (canvas: HTMLCanvasElement, canvasContainer: HTMLDivElement): void => {
  const scenes: SceneInfo[] = [];

  const onStart = (scene: SkillBallScene, index: number): void => {
    scene.control.minAzimuthAngle = -Infinity;
    scene.control.maxAzimuthAngle = Infinity;

    const delta =  Math.PI / 12;
    scene.control.minPolarAngle = 0 + delta;
    scene.control.maxPolarAngle = Math.PI - delta;
    scenes[index].isReseting = false;
  };

  // Generate skills containers elements
  for (const id of selectedTechnologieID) {
    const technologie = Config[id];
    const divTooltipContainer = document.createElement("div");
    canvasContainer.appendChild(divTooltipContainer);

    const tooltip = new Tooltip({
      target: divTooltipContainer,
      props: {
        content: technologie.name,
        autoPosition: true,
        style: {
          backgroundColor: "#272727"
        }
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const tooltipContainer = tooltip.$$.ctx[7] as HTMLSpanElement;

    const div = document.createElement("div");
    div.classList.add("w-32", "h-32");
    tooltipContainer.appendChild(div);

    const scene = createBallScene(div, technologie.iconURL);
    const index = scenes.push({
      isReseting: false,
      seed: Math.random() * 10000,
      scene: scene
    }) - 1;

    let timeoutID: NodeJS.Timeout | undefined;
    scene.control.addEventListener("end", () => {
      timeoutID = setTimeout(
        () => {
          timeoutID = undefined;
          scenes[index].isReseting = true;
        },
        1000 * 3
      );
    });

    scene.control.addEventListener("start", () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
        timeoutID = undefined;
      }
      onStart(scenes[index].scene, index);
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

    for (const [index, { seed, isReseting,  scene }] of scenes.entries()) {

      if (isReseting) {
        // get current angles

        let alpha = scene.control.getAzimuthalAngle();
        let beta = scene.control.getPolarAngle() - Math.PI / 2;

        // if they are close to the reset values, just set these values
        if (Math.abs(alpha) < 0.001) alpha = 0;
        if (Math.abs(beta) < 0.001) beta = 0;

        // smooth change using manual lerp
        scene.control.minAzimuthAngle = (995 / 1000) * alpha;
        scene.control.maxAzimuthAngle = scene.control.minAzimuthAngle;

        scene.control.minPolarAngle = Math.PI / 2 + (995 / 1000) * beta;
        scene.control.maxPolarAngle = scene.control.minPolarAngle;

        // if the reset values are reached, exit smooth reset
        if (alpha == 0 && beta == 0) onStart(scene, index);
      }


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