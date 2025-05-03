/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts}', './src/*.{html,js,ts}'],
	theme: {
		extend: {
			colors: {
				'custom-navBackground':'#D8A7B1',
				'custom-navText':'#2E2E2E'
			},
			fontFamily: {
				nameFont:["Playfair Display", 'serif'],
				navFont: ["Nunito", 'sans-serif']
			}
		}
	},
	plugins: []
};