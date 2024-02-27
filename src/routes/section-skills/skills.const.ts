import type { Config } from "$lib/config/technologie";


export const selectedTechnologieID: (keyof typeof Config)[] = [
  "lang.NodeJS",
  "lang.TypeScript",
  "lang.HTML"
];

export const floatingAnimationConfig = {
  speed: 1.75,
  rotationIntensity: 1.2,
  floatIntensity: 1.2,
  floatingRange: [-0.1, 0.1]
};