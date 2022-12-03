/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/components/**/*jsx",
    "./*/*html",
  ],
  theme: {
    minHeight: {
      50: "50px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("postcss"),
    require("autoprefixer"),
  ],
};
