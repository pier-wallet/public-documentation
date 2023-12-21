/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    fontFamily: {
      // sans: ["var(--font-gt-flexa)"],
      // mono: ["var(--font-gt-flexa)"],
      // serif: ["var(--font-gt-flexa)"],
      sans: ["var(--font-inconsolata)", "sans-serif"],
      mono: ["var(--font-inconsolata)", "monospace"],
      serif: ["var(--font-inconsolata)", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
