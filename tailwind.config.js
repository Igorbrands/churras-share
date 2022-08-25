/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				yellow: {
					100: '#FFD836',
					200: '#E5C231',
					300: '#998220'
				},
				gray: '#f1f1f1'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
