/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      width: {
        app: '27.5rem'
      },
      colors: {
        primary: {
          50: '#f1f3ff',
          100: '#e5e6ff',
          200: '#ced1ff',
          300: '#a7aaff',
          400: '#7876ff',
          500: '#4c3fff',
          600: '#3518ff',
          700: '#2407fa',
          800: '#1e05d2',
          900: '#1a06ac',
          950: '#0b0084',
          DEFAULT: '#0b0084'
        }
      }
    }
  },
  plugins: []
};
