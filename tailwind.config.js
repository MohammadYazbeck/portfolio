/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{html,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        lr: {
          "0%": { transform: "translateX(-300px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        rl: {
          "0%": { transform: "translateX(300px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        lrSmall: {
          "0%": { transform: "translateX(-15px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        rlSmall: {
          "0%": { transform: "translateX(15)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        bt: {
          "0%": { transform: "translateY(300px)", opacity: 1 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        tb: {
          "0%": { transform: "translateY(-300px)", opacity: 1 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        lr: "lr 0.75s ease-in-out forwards",
        rl: "rl 0.75s ease-in-out forwards",
        lrSmall: "lrSmall 1s ease-in-out forwards",
        rlSmall: "rlSmall 1s ease-in-out forwards",
        bt: "bt 0.5s ease-in-out forwards",
        tb: "tb 0.5s ease-in-out forwards",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
});
