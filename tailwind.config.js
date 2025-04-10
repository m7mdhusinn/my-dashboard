/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          nunito: ['Nunito Sans', 'sans-serif'],
        },
      },
    },
    darkMode: 'class', // enables dark mode with class strategy
    plugins: [],
  }
