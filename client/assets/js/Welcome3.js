tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#1782cf",

        "background-light": "#F5F3EF",

        "background-dark": "#111a21",

        "text-primary": "#0e151b",

        "text-secondary": "#4e7997",

        "pastel-purple": "#e0c3fc",

        "pastel-blue": "#d0e1fd",

        "pastel-yellow": "#fdf6c3",

        "pastel-pink": "#fcc3d8",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      boxShadow: {
        glow: "0 4px 20px -2px rgba(23, 130, 207, 0.4)",

        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",

        "float-delayed": "float 6s ease-in-out 3s infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },

          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};
