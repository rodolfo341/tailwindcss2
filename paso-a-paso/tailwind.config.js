/** @type {import('tailwindcss').Config} */
module.exports = {

	content: ["./src/**/*.{html,js}"],

	theme: {

		container: {
			center: true,
		},

		extend: {
			colors: {
				"peru-1": "#cd853f",
				"peru-2": "#f8bb7e",
				"peru-3": "#f8cda1",
			},
		},

	},
	plugins: [],
}