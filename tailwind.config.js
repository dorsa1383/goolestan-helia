/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        display: 'Sans',
      },
    },
    screens:{
      "mobile":"0",
      "desktop":"1000px"
    }
  },
  plugins: [],
}

