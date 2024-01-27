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
      "fujitsu-blue": "#3B82F6",
      "fujitsu-white": "#FEFEFE",
      "fujitsu-gray": "#6B7280",
      "fujitsu-light-gray": "#E5E7EB",
      "fujitsu-black": "#1C1C1C",
      "fujitsu-dark-blue": "#204887",
      "fujitsu-yellow": "#EAB308",
      "fujitsu-red": "#e24040",
      "fujitsu-green": "#31af46",
    },
  },
  plugins: [],
};
