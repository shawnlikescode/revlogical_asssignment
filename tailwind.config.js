module.exports = {
	content: ["./pages/**/*.{js,ts,jsx}", "./components/**/*.{js,ts,jsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
