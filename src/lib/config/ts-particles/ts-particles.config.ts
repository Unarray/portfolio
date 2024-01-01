import type Particles from "@tsparticles/svelte";

export const config: Particles["options"] = {
  fullScreen: {
    enable: false,
    zIndex: -50
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        width: 800
      }
    },
    opacity: {
      value: {
        max: 0.2,
        min: 0.1
      },
      animation: {
        enable: false,
        speed: 0.1,
        sync: false
      }
    },
    size: {
      value: {
        max: 3,
        min: 2
      }
    },
    color: {
      value: "#fff"
    },
    links: {
      enable: true,
      distance: 150,
      color: "#fff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: {
        min: 0.5,
        max: 1
      },
      direction: "none",
      random: true,
      straight: false,
      outModes: "out"
    }
  },
  detectRetina: true
};