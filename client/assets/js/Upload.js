tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2badee",

        "background-light": "#F5F3EF", // Custom warm background requested

        "background-dark": "#101c22",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.5rem",

        lg: "1rem",

        xl: "1.5rem",

        "2xl": "2rem",

        full: "9999px",
      },

      boxShadow: {
        soft: "0 20px 40px -10px rgba(43, 173, 238, 0.15)",

        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
    },
  },
};
