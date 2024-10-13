/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./home/**/*.{js,jsx,ts,tsx}",
    "./landing page/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

