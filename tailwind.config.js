export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f1f",
        midnight: "#070b16",
        aurora: "#7c6bff",
        glacier: "#73f7ff",
        skyglow: "#a9c7ff",
        neon: "#57f0ff",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Urbanist", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(86, 117, 255, 0.35)",
        soft: "0 18px 40px rgba(15, 23, 42, 0.18)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top left, rgba(124, 107, 255, 0.35), transparent 55%), radial-gradient(circle at 70% 10%, rgba(115, 247, 255, 0.25), transparent 55%), linear-gradient(180deg, #05060f 0%, #0b1020 60%, #05060f 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease infinite",
      },
    },
  },
  plugins: [],
};
