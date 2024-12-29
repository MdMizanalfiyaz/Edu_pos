/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If you have a root HTML file
    "./src/**/*.{html,css,js,jsx,ts,tsx}", // Match all files in src
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:"#1b1c31",
        tail:"#d2fcdc",
        pupink:"#e9d2fc",
        cream:"#ffe7cd",
        uBlue:"#cae1ff",
        ulGreen:"#ffc7ec",
        ulbgWhite:"#f7f8fa",
      },
    },
  },
  plugins: [],
};
