/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'text-green': 'green-animate 1s linear infinite',
        'text-red': 'red-animate 1s linear infinite',
      },
      'keyframes': {
        'green-animate': {
          '0%, 50%': {
            'color': 'green'
          },
          '100%': {
            'color': 'black'
          }
        },
        'red-animate': {
          '0%, 50%': {
            'color': 'red'
          },
          '100%': {
            'color': 'black'
          }
        },
      }
    },
  },
  plugins: [],
}
