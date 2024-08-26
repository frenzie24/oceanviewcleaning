/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interTight: ['Inter Tight, sans-serif'],
        playWrite: ['Playwrite NO, serif'],
      },
    },
  },
  plugins: [],
}

