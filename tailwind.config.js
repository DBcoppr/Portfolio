const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      // screens: {
      //   f2xl: { max: "1535px", min: "1280px" },
      //   // => @media (max-width: 1535px) { ... }

      //   fxl: { max: "1279px", min: "1023px" },
      //   // => @media (max-width: 1279px) { ... }

      //   flg: { max: "1023px", min: "768px" },
      //   // => @media (max-width: 1023px) { ... }

      //   fmd: { max: "767px", min: "640px" },
      //   // => @media (max-width: 767px) { ... }

      //   "2xl": { max: "1535px" },
      //   // => @media (max-width: 1535px) { ... }

      //   xl: { max: "1279px" },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { max: "1023px" },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { max: "767px" },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { max: "639px" },
      //   // => @media (max-width: 639px) { ... }

      //   xs: { max: "479px" },
      //   // => @media (max-width: 479px) { ... }
      // },
      spacing: {
        50: "18rem",
      },
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4)2px,#f5f5f5 5px, #f5f5f5 108px)",
      circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

      circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

      circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

      circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

      circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

      circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

      circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
    },
  },
  plugins: [],
};
