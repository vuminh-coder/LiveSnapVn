tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2b4bee",

        "background-light": "#f6f6f8",

        "background-dark": "#101322",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      animation: {
        "float-slow": "float 8s ease-in-out infinite",

        "float-medium": "float 6s ease-in-out infinite reverse",

        "float-fast": "float 7s ease-in-out infinite",

        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",

        "gradient-shift": "gradient-shift 15s ease infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },

          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },

        "pulse-glow": {
          "0%, 100%": { opacity: 1 },

          "50%": { opacity: 0.7 },
        },

        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },

          "50%": { backgroundPosition: "100% 50%" },

          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
};

// Inline script for shimmer animation since it's specific
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
            @keyframes shimmer {
                100% {
                    transform: translateX(100%);
                }
            }
            @keyframes width {
                0% { width: 10%; }
                50% { width: 60%; }
                100% { width: 95%; }
            }
        </style>`,
);
