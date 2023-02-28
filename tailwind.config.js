/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3659',
        secondary: '#89cbdb',
        tertiary: '#ef845d',
        quaternary: '#fbca6d'
      }
    }
  },
  plugins: []
}
