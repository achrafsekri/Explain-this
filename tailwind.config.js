/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',

      },
      colors: {
        primary: "#FDEDC4",
        paper: "#FFFDF9",
        accent: "#FA8647",
        text: "#2E3238",
        black: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
