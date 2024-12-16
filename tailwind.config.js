/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Aileron: ["Aileron", "sans-serif"],
        Basement: ["Basement", "sans-serif"],
        Bebas: ["Basement", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Chivo: ["Chivo", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      maxWidth: {
        websize: "1280px",
      },
    },
  },
  plugins: [],
};
