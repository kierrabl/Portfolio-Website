/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts}', './src/*.{html,js,ts}'],
	theme: {
		extend: {
			colors: {
				'custom-navBackground':'#e4c2c9',
				'custom-navText':'#2E2E2E',
				'custom-background':'#FDECEF'
			},
			fontFamily: {
				nameFont:["Lora", 'serif'],
				navFont: ["Nunito", 'sans-serif'],
				orbitron: ['Orbitron', 'sans-serif'],
        		staatliches: ['Staatliches', 'sans-serif'],
        		syncopate: ['Syncopate', 'sans-serif'],
        		audiowide: ['Audiowide', 'sans-serif'],
			}
		}
	},
	plugins: []
};