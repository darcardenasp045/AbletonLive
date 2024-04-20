/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		letterSpacing: {
			'2x':'0.1rem',
		}
		
	  },
	},
	plugins: [],
  };