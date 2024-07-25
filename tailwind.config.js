/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "550px",
      // => @media (min-width: 550px) { ... }

      mini: "840px",
      // => @media (min-width: 820px) { ... }

      ipad: "1100px",
      // => @media (min-width: 1100px) { ... }

      laptop: "1440px",
      // => @media (min-width: 1440px) { ... }

      pc: "1780px",
      // => @media (min-width: 1580px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
