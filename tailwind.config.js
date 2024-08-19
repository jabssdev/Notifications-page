/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Plus Jakarta Sans", "sans-serif"],
			},
			colors: {
				primary: {
					red: "hsl(1, 90%, 64%)",
					blue: "hsl(219, 85%, 26%)",
				},
				secundary: {
					white: "hsl(0, 0%, 100%)",
					lgblue1: "hsl(210, 60%, 98%)",
					lgblue2: "hsl(211, 68%, 94%)",
					lgblue3: "hsl(205, 33%, 90%)",
					gblue: "hsl(219, 14%, 63%)",
					dgblue: "hsl(219, 12%, 42%)",
					vdblue: "hsl(224, 21%, 14%)",
				},
			},
		},
	},
	plugins: [],
};
