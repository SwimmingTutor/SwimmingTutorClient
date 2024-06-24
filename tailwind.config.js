/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary": "#0B0084", // main color
      },
    }
  },
  plugins: []
};