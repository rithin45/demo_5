/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      /* =========================================================
         COLORS
      ========================================================= */

      colors: {
        obsidian: "#FDFBF8",
        navy: "#062D2A",
        red: "#958665",
        blue: "#597B6A",
        cream: "#DED7CD",
        ink: "#062D2A",
        sage: "#597B6A",
        sand: "#DED7CD",
        taupe: "#958665",
        mist: "#F7F3EE",

        glass: "rgba(255,255,255,0.7)",
        border: "rgba(6,45,42,0.12)",
      },

      /* =========================================================
         TYPOGRAPHY
      ========================================================= */

      fontFamily: {
        body: ["Manrope", "sans-serif"],
        display: ["Sora", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },

      /* =========================================================
         SHADOWS
      ========================================================= */

      boxShadow: {
        glow:
          "0 0 40px rgba(89, 123, 106, 0.25)",

        redGlow:
          "0 0 40px rgba(149, 134, 101, 0.28)",

        panel:
          "0 30px 90px rgba(6, 45, 42, 0.12)",

        halo:
          "0 0 0 1px rgba(6,45,42,0.08), 0 18px 80px rgba(89,123,106,0.12)",

        luxury:
          "0 10px 50px rgba(6,45,42,0.18)",
      },

      /* =========================================================
         BACKGROUNDS
      ========================================================= */

      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(6,45,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,45,42,0.06) 1px, transparent 1px)",

        "radial-premium":
          `
          radial-gradient(
            circle at top left,
            rgba(89, 123, 106, 0.18),
            transparent 30%
          ),

          radial-gradient(
            circle at top right,
            rgba(149, 134, 101, 0.22),
            transparent 34%
          ),

          radial-gradient(
            circle at bottom,
            rgba(222, 215, 205, 0.45),
            transparent 40%
          )
          `,

        "premium-gradient":
          `
          linear-gradient(
            135deg,
            #062D2A 0%,
            #597B6A 100%
          )
          `,

        "red-gradient":
          `
          linear-gradient(
            135deg,
            #958665 0%,
            #597B6A 100%
          )
          `,
      },

      /* =========================================================
         BORDER RADIUS
      ========================================================= */

      borderRadius: {
        luxury: "32px",
        glass: "28px",
        panel: "40px",
      },

      /* =========================================================
         ANIMATIONS
      ========================================================= */

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-14px)",
          },
        },

        pulseSoft: {
          "0%, 100%": {
            opacity: "0.65",
          },

          "50%": {
            opacity: "1",
          },
        },

        marquee: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },

          "100%": {
            transform: "translate3d(-50%, 0, 0)",
          },
        },

        glowMove: {
          "0%": {
            transform: "translateX(-20%)",
          },

          "50%": {
            transform: "translateX(20%)",
          },

          "100%": {
            transform: "translateX(-20%)",
          },
        },

        rotateSlow: {
          "0%": {
            transform: "rotate(0deg)",
          },

          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        float:
          "float 6s ease-in-out infinite",

        "pulse-soft":
          "pulseSoft 4s ease-in-out infinite",

        marquee:
          "marquee 22s linear infinite",

        glow:
          "glowMove 10s ease-in-out infinite",

        rotateSlow:
          "rotateSlow 18s linear infinite",
      },

      /* =========================================================
         BACKDROP BLUR
      ========================================================= */

      backdropBlur: {
        xs: "2px",
        premium: "24px",
      },

      /* =========================================================
         SPACING
      ========================================================= */

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      /* =========================================================
         MAX WIDTH
      ========================================================= */

      maxWidth: {
        "8xl": "1600px",
      },
    },
  },

  plugins: [],
};