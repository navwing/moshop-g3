/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      grey:"#939393",
      slate: "#e4e4e4",
      default_green:'#069255'
    }
  },
  plugins: [],
}
