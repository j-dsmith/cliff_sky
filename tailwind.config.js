/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        500: "500",
        miniCart: "1000",
        cartBtn: "1001",
        imageModalOverlay: "1002",
        imageModal: "1003",
        preload: "5000",
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
        "4xl": "1920px",
        "5xl": "2560px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "body-light": "hsl(44deg 60% 95.1%)",
        "studio-dark": "hsl(210deg 6% 7%)",
        "cs-mustard-900": "hsl(50, 54%, 9%)",
        "cs-mustard-800": "hsl(50, 54%, 19%)",
        "cs-mustard-700": "hsl(50, 54%, 29%)",
        "cs-mustard-600": "hsl(50, 54%, 39%)",
        "cs-mustard-500": "hsl(50, 54%, 49%)",
        "cs-mustard-400": "hsl(50, 54%, 58%)",
        "cs-mustard-300": "hsl(50, 54%, 69%)",
        "cs-mustard-200": "hsl(50, 54%, 79%)",
        "cs-mustard-100": "hsl(50, 54%, 89%)",
        "cs-mustard-50": "hsl(50, 54%, 94%)",

        // "cs-mustard-light": "hsl(50, 54%, 64%)",
        // "cs-mustard-extralight": "hsl(49, 54%, 79%)",
        // "cs-mustard-900": "hsl(49, 54%, 49%)",
        // "cs-mustard-800": "hsl(49, 54%, 64%)",
        // "cs-mustard-200": "hsl(49, 54%, 79%)",
        // "cs-mustard-100": "hsl(49, 54%, 89%)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        "md-emerald": "0 0 0.25rem rgba(29, 209, 161, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
