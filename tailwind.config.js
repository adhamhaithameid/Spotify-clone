module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1db954",
        active: "#282828",
        link: "#b3b3b3",
        footer: "#181818",
      },
      fontSize: {
        s: "0.813rem",
      },
      boxShadow: {
        spotify: "0 2px 4px 0 rgb(0 0 0 / 20%)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeInUp: "fadeInUp 0.5s ease-in-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
      backgroundColor: ["active", "hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
