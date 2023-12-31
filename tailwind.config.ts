import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "transparent": "transparent",
      "white": "#ffffff",
      "black": {
        DEFAULT: "#000000",
        1: "#101010",
        2: "#121212"
      },
      "blue": {
        DEFAULT: "#1d4ed8",
        dark: "#001220"
      },
      "green": "#15803d",
      "gray": {
        DEFAULT: "#888",
        1: "#111"
      },
      "red": "rgb(239 68 68 / var(--tw-bg-opacity))"
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: "1" }],
      "xxl": ["4.5rem", { lineHeight: "1" }]
    },

    fontFamily: {
      "sans": ["JetBrains Mono", "sans-serif"]
    },

    screens: {
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    },

    backgroundImage: {
      "separator": "linear-gradient(0.25turn, transparent, #fff, transparent)"
    },

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
    },

    borderRadius: {
      DEFAULT: "0.5rem",
      "full": "9999px"
    },

    extend: {
      opacity: {
        '1': '0.01',
        '2': '0.02',
        '3': '0.03',
        '4': '0.04',
      },
      height: {
        "0.5": "1px"
      }
    }
  },
  plugins: [],
} satisfies Config;

