/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts}', './src/*.{html,js,ts}'],
	theme: {
		extend: {
			colors: {
				'custom-navBackground':'#E4C2C9',
				'custom-text':'#2E2E2E',
				'custom-background':'#E4C2C9'
			},
			fontFamily: {
				body: ["Nunito", 'sans-serif'],
				orbitron: ['Orbitron', 'sans-serif'],

			}
		}
	},
	plugins: []
};