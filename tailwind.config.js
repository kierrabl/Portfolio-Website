/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts}', './src/*.{html,js,ts}'],
	theme: {
		extend: {
			colors: {
				'custom-navBackground':'#D8A7B1',
				'custom-navText':'#D3D3D3',
				'custom-background':'#FDECEF'
			},
			fontFamily: {
				nameFont:["Lora", 'serif'],
				navFont: ["Nunito", 'sans-serif']
			}
		}
	},
	plugins: []
};