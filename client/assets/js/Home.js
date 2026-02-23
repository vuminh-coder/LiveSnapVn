console.log("Welcome to LiveSnapVN!");
document.body.style.backgroundColor = "#f0f2f5";

tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#cae4f1",

        "background-light": "#F5F3EF",

        "background-dark": "#131b1f",

        "text-main": "#101619",

        "glass-border": "rgba(255, 255, 255, 0.2)",

        "glass-surface": "rgba(255, 255, 255, 0.15)",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "2rem",
        full: "9999px",
      },

      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",

        "glass-deep": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",

        soft: "0 20px 40px -15px rgba(0, 0, 0, 0.05)",

        glow: "0 0 20px rgba(255, 255, 255, 0.5)",
      },

      animation: {
        "float-slow": "float 8s ease-in-out infinite",

        "float-medium": "float 6s ease-in-out infinite",

        "float-fast": "float 4s ease-in-out infinite",

        "gradient-move": "gradient 15s ease infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },

          "50%": { transform: "translateY(-20px)" },
        },

        gradient: {
          "0%": { backgroundPosition: "0% 50%" },

          "50%": { backgroundPosition: "100% 50%" },

          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
};
