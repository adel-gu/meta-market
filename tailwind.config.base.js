/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
			},
			screens: {
				sm: '600px',
				md: '850px',
				lg: '984px',
				xl: '1240px',
				'2xl': '1496px',
				'3xl': '1600px',
			},
		},
		screens: {
			tablet: '960px',
			desktop: '1248px',
		},
		colors: {
			'bg-primary': '#2b2b2b',
			'bg-secondary': '#3b3b3b',
			'foreground-primary': '#fff',
			'foreground-secondary': '#858584',
			primary: '#a259ff',
		},
		fontFamily: {
			'space-mono': '"Space Mono", serif',
			'work-sans': '"Work Sans", serif',
		},
		fontSize: {
			sm: ['12px', { lineHeight: '19.2px' }], // caption
			base: ['16px', { lineHeight: '25.6px' }], // base
			md: ['22px', { lineHeight: '35.2px' }], // h5
			lg: ['28px', { lineHeight: '44.8px' }], // h4
			xl: ['38px', { lineHeight: '60.8px' }], // h3
			'2xl': ['51px', { lineHeight: '81.6px' }], // h2
			'3xl': ['67px', { lineHeight: '107.2px' }], // h1
		},
		extend: {
			backgroundImage: {
				'gradient-1': 'linear-gradient(-68deg, #a259ff 0%, #ff6250 100%)',
				'gradient-2': 'linear-gradient(-36deg, #a259ff 0%, #377df7 100%)',
			},
		},
	},
};
