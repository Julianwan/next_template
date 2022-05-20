/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable no-undef */
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'media',

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('tailwindcss-textshadow')
	],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		screens: {
			'xs': '375px',
			// => @media (min-width: 375px) { ... }

			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			borderRadius: {
				'4xl': '1.75rem',
				'5xl': '2rem',
				'full': '9999px'
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				1: '1px',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px'
			},
			colors: {
				amber: colors.amber,
				black: '#000000',
				gray: colors.neutral,
				rose: colors.rose,
				silver: '#777777',
				slate: '#111111',
				smoke: '#DDDDDD',
				tin: '#c4c4c4',
				white: '#FFFFFF'
			},
			fontFamily: {
				inter: [
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'sans-serif'
				]
			},
			fontWeight: ['hover', 'focus']
		}
	},
	variants: {
		transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
	}
};
