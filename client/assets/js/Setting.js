tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2b4bee",

        "primary-content": "#ffffff",

        secondary: "#ec4899", // Pink for accents

        accent: "#8b5cf6", // Purple for accents

        "neutral-content": "#4c599a",

        "background-light": "#f6f6f8",

        "background-dark": "#101322",

        "surface-light": "#ffffff",

        "surface-dark": "#1a1d2d",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "1rem",

        lg: "1.5rem",

        xl: "2rem",

        "2xl": "3rem",

        full: "9999px",
      },

      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.05)",

        glow: "0 0 20px -5px rgba(43, 75, 238, 0.3)",
      },
    },
  },
};
