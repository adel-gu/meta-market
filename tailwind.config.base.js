/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.875rem',
				tablet: '4.5rem',
				desktop: '7.188rem',
			},
		},
		screens: {
			tablet: '960px',
			desktop: '1248px',
		},
		colors: {
			'bg-primary': '#2b2b2b',
			'bg-secondary': '#3b3b3b',
			'caption-label-clr': '#858584',
			'text-clr': '#fff',
			cta: '#a259ff',
		},
		fontFamily: {
			'space-mono': '"Space Mono", serif',
			'work-sans': '"Work Sans", serif',
		},
		fontSize: {
			sm: ['12px', { lineHeight: '19.2px' }],
			base: ['16px', { lineHeight: '25.6px' }],
			md: ['22px', { lineHeight: '35.2px' }],
			lg: ['28px', { lineHeight: '44.8px' }],
			xl: ['38px', { lineHeight: '60.8px' }],
			'2xl': ['51px', { lineHeight: '81.6px' }],
			'3xl': ['67px', { lineHeight: '107.2px' }],
		},
		extend: {
			backgroundImage: {
				'gradient-1': 'linear-gradient(-68deg, #a259ff 0%, #ff6250 100%)',
				'gradient-2': 'linear-gradient(-36deg, #a259ff 0%, #377df7 100%)',
			},
		},
	},
};
