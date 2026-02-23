tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#47b4eb",

        "primary-dark": "#2a93c9",

        "background-light": "#f6f7f8", // As per theme config

        "background-cream": "#F5F3EF", // User requested airy background

        "background-dark": "#111c21",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],

        body: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "1rem",

        lg: "1.5rem",

        xl: "2rem",

        "2xl": "2.5rem",

        full: "9999px",
      },

      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.05)",

        glow: "0 0 20px rgba(71, 180, 235, 0.3)",
      },
    },
  },
};
