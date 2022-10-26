/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06283D",
      },
    },
    fontFamily: {
      header: "Lato",
      text: "Nunito",
    },
  },
  plugins: [/* require("@tailwindcss/forms") */],
};
