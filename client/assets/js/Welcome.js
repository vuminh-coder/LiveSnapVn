tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1782cf",
        "background-light": "#f6f7f8",
        "background-dark": "#111a21",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        full: "9999px",
      },
      boxShadow: {
        "soft-glow": "0 0 15px -3px rgba(23, 130, 207, 0.3)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        shimmer: "shimmer 2s linear infinite",
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
        shimmer: {
          from: {
            "background-position": "0 0",
          },
          to: {
            "background-position": "-200% 0",
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
