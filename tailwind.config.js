/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f2f8ff',
					100: '#c2dfff',
					200: '#91c6ff',
					300: '#61adff',
					400: '#3094ff',
					500: '#007bff',
					600: '#0069d9',
					700: '#0056b3',
					800: '#00448c',
					900: '#003166',
				},
			},
		},
	},
	plugins: [],
};
