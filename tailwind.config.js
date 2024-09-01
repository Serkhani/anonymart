/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins, sans-serif"
      },
      colors: {
        'wisteria': {
        '50': '#faf8fc',
        '100': '#f4eff8',
        '200': '#ebe2f2',
        '300': '#dbcae8',
        '400': '#c3a8d8',
        '500': '#ab86c6',
        '600': '#9064af',
        '700': '#7e569a',
        '800': '#6a4a7f',
        '900': '#573d66',
        '950': '#3a2348',
    },
      }
    },
  },
  plugins: [],
}