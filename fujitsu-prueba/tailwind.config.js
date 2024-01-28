/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "fujitsu-blue": "#094EBE",
      "fujitsu-white": "#FEFEFE",
      "fujitsu-gray": "#4D4F5C",
      "fujitsu-dark-gray": "#3D3D3D",
      "fujitsu-light-gray": "#EEEFF1",
      "fujitsu-black": "#1C1C1C",
      "fujitsu-dark-blue": "#204887",
      "fujitsu-yellow": "#094EBE",
      "fujitsu-neo-yellow": "#F5C810",
      "fujitsu-red": "#A70606",
      "fujitsu-green": "#237A06",
    },
  },
  plugins: [],
};
