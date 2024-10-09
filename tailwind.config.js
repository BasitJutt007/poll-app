/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        "medium-screen": { max: "1120px" },
        "small-screen": { max: "768px" },
      },
      colors: {
        pollPurple: '#6b54fe',  // Your custom color
      }
    },
  },
  plugins: [],
}
