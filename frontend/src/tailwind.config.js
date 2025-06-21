/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 includes all React files in src folder
  ],
  theme: {
    extend: {},  // you can customize themes here later
  },
  plugins: [
  require('@tailwindcss/line-clamp'),
],
}
