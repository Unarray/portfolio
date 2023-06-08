import type { ISourceOptions } from "tsparticles-engine";

/* eslint camelcase: "off" */
export const config: ISourceOptions = {
  fullScreen: {
    enable: false,
    zIndex: -50
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 0.1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true
    },
    color: {
      value: "#fff"
    },
    line_linked: {
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
      out_mode: "out"
    }
  },
  "retina_detect": true
};