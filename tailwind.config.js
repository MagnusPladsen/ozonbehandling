/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#294354",
        /* primary: "#0c3866", */
        /* primary: "#004b79", */
      },
    },
    fontFamily: {
      header: "Lato",
      text: "Nunito",
    },
  },
  plugins: [/* require("@tailwindcss/forms") */],
};

/*

@/


/* Mulige farger:
#487eb0
#273c75


*/