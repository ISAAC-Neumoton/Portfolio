/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', //  This enables class-based theme toggling instead of system preference
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}