tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#cae4f1",

        "primary-dark": "#a0c4d6",

        "background-light": "#f6f7f8",

        "background-dark": "#131b1f",

        "surface-light": "#ffffff",

        "surface-dark": "#1e282e",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      animation: {
        "gradient-x": "gradient-x 15s ease infinite",

        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",

            "background-position": "left center",
          },

          "50%": {
            "background-size": "200% 200%",

            "background-position": "right center",
          },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },

          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};
