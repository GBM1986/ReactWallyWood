/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F9F9F9',
        text: '#00000029',
        brownishRed: '#5C1F06',
        lightRed: '#D97852', 
        lightBrown: '#D1B3A7',
        darkGray: '#524641',
        mediumGray: '#CCCCCC',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
