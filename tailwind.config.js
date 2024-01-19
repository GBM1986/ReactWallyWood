/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titillium-web': ['Titillium Web', 'sans-serif'],
      },
      colors: {
        white: '#F9F9F9',
        text: '#00000029',
        primary: '#5C1F06',
        orange: '#D97852', 
        lightBrown: '#D1B3A7',
        darkGray: '#524641',
        mediumGray: '#CCCCCC',
        black: '#000000',
        
      },
    },
  },
  plugins: [],
};
