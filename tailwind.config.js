/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        500: "500",
      },
      colors: {
        "body-light": "hsl(44deg 60% 95.1%)",
        "studio-dark": "hsl(210deg 6% 7%)",
        "cs-mustard": "hsl(50, 54%, 58%)",
        "cs-mustard-light": "hsl(50, 54%, 64%)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-xs": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
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
        "5xl": "2560px",
      },
    },
  },
  plugins: [],
};
