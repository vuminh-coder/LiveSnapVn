tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#4b2bee",

        "background-dark": "#0B0A14",

        "background-card": "#1a162e",

        "glass-border": "rgba(255, 255, 255, 0.1)",

        "glass-bg": "rgba(20, 17, 34, 0.7)",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },

      borderRadius: {
        "3xl": "2rem", // 32px
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
};
