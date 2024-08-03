/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        'Poppins-Medium': ['Poppins-Medium', 'sans-serif'],
        'Poppins-ExtraBold': ['Poppins-ExtraBold', 'sans-serif'],
        'Poppins-Bold': ['Poppins-Bold', 'sans-serif'],
      },
      brightness: {
        70: '70%',
        120: '120%',
        'custom-brightness': '30%', // Adiciona um valor personalizado
      },
    },
  },
  plugins: [],
}
