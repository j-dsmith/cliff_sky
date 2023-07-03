/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      colors: {
        "body-light": "hsl(44deg 60% 95.1%)",
        "studio-dark": "hsl(210deg 6% 7%)",
        "cs-mustard": "hsl(50, 54%, 58%)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-xs": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      fontSize: {
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
      },
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        xs: "425px",
      },
    },
  },
  plugins: [],
};
