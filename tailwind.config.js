/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFD836',
        gray: '#f1f1f1',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
