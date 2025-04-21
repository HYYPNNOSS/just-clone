import type { Config } from "tailwindcss";
const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"infinite-scroll": "infinite-scroll 25s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-50%)" },
				},
			},
			fontFamily: {
				georgia: "var(--georgia-font)",
				poppins: "var(--poppins-font)",
				workSans: "var(--workSans-font)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				ruby: "#AF1837",
			},
			backgroundImage: {
				"hero-pattern": "url('/images/accounting-firm.png')",
				"footer-texture": "url('/img/footer-texture.png')",
				"hero-part": "url('/Images/partners.png')",
				"hero-blog": "url('/Images/cafge_blogs.png')"
			},
			screens: {
				xs: "475px",
				sm: "641px",
				md: "769px",
				lg: "1025px",
				xl: "1281px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
