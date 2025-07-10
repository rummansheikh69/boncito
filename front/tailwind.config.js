/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FE8700",
        buttonColor: "#FB565C",
        card: "#02A333",
      },
    },
  },
  plugins: [],
};
