/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'telkom-red': '#E42313',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
  },
  plugins: [],
}