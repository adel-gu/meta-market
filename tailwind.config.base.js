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

// module.exports = {
// 	darkMode: ['class'],
// 	content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px',
// 			},
// 		},
// 		extend: {
// 			colors: {
// 				border: 'hsl(var(--border))',
// 				input: 'hsl(var(--input))',
// 				ring: 'hsl(var(--ring))',
// 				background: 'hsl(var(--background))',
// 				foreground: 'hsl(var(--foreground))',
// 				primary: {
// 					DEFAULT: 'hsl(var(--primary))',
// 					foreground: 'hsl(var(--primary-foreground))',
// 				},
// 				secondary: {
// 					DEFAULT: 'hsl(var(--secondary))',
// 					foreground: 'hsl(var(--secondary-foreground))',
// 				},
// 				destructive: {
// 					DEFAULT: 'hsl(var(--destructive))',
// 					foreground: 'hsl(var(--destructive-foreground))',
// 				},
// 				muted: {
// 					DEFAULT: 'hsl(var(--muted))',
// 					foreground: 'hsl(var(--muted-foreground))',
// 				},
// 				accent: {
// 					DEFAULT: 'hsl(var(--accent))',
// 					foreground: 'hsl(var(--accent-foreground))',
// 				},
// 				popover: {
// 					DEFAULT: 'hsl(var(--popover))',
// 					foreground: 'hsl(var(--popover-foreground))',
// 				},
// 				card: {
// 					DEFAULT: 'hsl(var(--card))',
// 					foreground: 'hsl(var(--card-foreground))',
// 				},
// 			},
// 			borderRadius: {
// 				lg: `var(--radius)`,
// 				md: `calc(var(--radius) - 2px)`,
// 				sm: 'calc(var(--radius) - 4px)',
// 			},
// 			fontFamily: {
// 				sans: ['var(--font-sans)', ...fontFamily.sans],
// 			},
// 			keyframes: {
// 				'accordion-down': {
// 					from: { height: '0' },
// 					to: { height: 'var(--radix-accordion-content-height)' },
// 				},
// 				'accordion-up': {
// 					from: { height: 'var(--radix-accordion-content-height)' },
// 					to: { height: '0' },
// 				},
// 			},
// 			animation: {
// 				'accordion-down': 'accordion-down 0.2s ease-out',
// 				'accordion-up': 'accordion-up 0.2s ease-out',
// 			},
// 		},
// 	},
// 	plugins: [require('tailwindcss-animate')],
// };
