/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css,scss,sass,less}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
