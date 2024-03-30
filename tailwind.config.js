/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#6200EE",
        "dark": "#333333"
      },
    },
    fontFamily: {
      sans: "Mulish"
    },
    container: {
      center: true,
      padding: '4px',
      screens: {
        xl: '1240px'
      }
    }
  },
  plugins: [],
}