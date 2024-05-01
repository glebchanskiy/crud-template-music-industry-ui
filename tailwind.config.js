/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"300":"#93c5fd","500":"#60a5fa","600":"#93c5fd","700":"#93c5fd"},
        secondary: '#F9F3CC',
        table: '#D7E5CA',
        text: '#31363F',
        back: '#D2E0FB',
      }
    },
  },
  plugins: [],
}

