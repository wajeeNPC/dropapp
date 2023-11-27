/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agbalumo: ['Agbalumo', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}