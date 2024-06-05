/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
        'coin-gradient': 'linear-gradient(rgba(84, 3, 255, 0.15), rgba(105, 2, 153, 0.15))',
        
      },
      gridTemplateColumns: {
        // Custom grid template
        'custom-template': '0.5fr 2fr 1fr 1fr 1.5fr',
      },
    },
  },
  plugins: [],
}