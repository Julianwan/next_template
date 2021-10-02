import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import * as NextImage from 'next/image';
import Layout from './layout';
import '../src/styles/globals.scss';



const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

addDecorator((storyFn) => <div style={{ textAlign: 'left' }}>{storyFn()}</div>);

const customViewports = {
	iphone5: {
		name: 'iPhone 5',
		styles: {
			height: '568px',
			width: '320px',
		},
		type: 'mobile',
	},
	iphone6: {
		name: 'iPhone 6',
		styles: {
			height: '667px',
			width: '375px',
		},
		type: 'mobile',
	},

	iphone8p: {
		name: 'iPhone 8 Plus',
		styles: {
			height: '736px',
			width: '414px',
		},
		type: 'mobile',
	},
	iphonex: {
		name: 'iPhone X',
		styles: {
			height: '812px',
			width: '375px',
		},
		type: 'mobile',
	},

	iphonexsmax: {
		name: 'iPhone XS Max',
		styles: {
			height: '896px',
			width: '414px',
		},
		type: 'mobile',
	},
	ipad: {
		name: 'iPad',
		styles: {
			height: '1024px',
			width: '768px',
		},
		type: 'tablet',
	},
	ipad10p: {
		name: 'iPad Pro 10.5-in',
		styles: {
			height: '1112px',
			width: '834px',
		},
		type: 'tablet',
	},
	ipad12p: {
		name: 'iPad Pro 12.9-in',
		styles: {
			height: '1366px',
			width: '1024px',
		},
		type: 'tablet',
	},
	pixel: {
		name: 'Pixel',
		styles: {
			height: '960px',
			width: '540px',
		},
		type: 'mobile',
	},
	pixelxl: {
		name: 'Pixel XL',
		styles: {
			height: '1280px',
			width: '720px',
		},
		type: 'mobile',
	},
};

export const parameters = {
	viewport: { viewports: { ...MINIMAL_VIEWPORTS, ...customViewports } },
	backgrounds: { disable: true },
	actions: { argTypesRegex: '^on[A-Z].*' },
	fullscreen: 'false',
	darkMode: {
		current: 'dark',
		lightClass: 'light',
		darkClass: 'dark',
		light: {
			brandTitle: '<small>Template Von Julian</small>',
			brandUrl: 'https://www.julianwan.com',
		/* 	brandImage: noneYet */
			...themes.light,
			appBg: '#DDDDDD',
			appContentBg: '#DDDDDD',
			appBorderColor: 'transparent',
			appBorderRadius: 2,
			stylePreview: true,

			// Typography
			fontBase:
				'"Inter", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,  "Helvetica Neue", Arial, sans-serif',
			fontCode:
				'"Inter", ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',

			// Text colors
			textColor: '#111111',
			textInverseColor: '#DDDDDD',

			// Toolbar default and active colors
			barTextColor: '#a5a5a5',
			barSelectedColor: '#0E0E0E',
			barBg: '#FFFFFF',

			// Form colors
			inputBg: '#E0E0E0',
			inputBorder: '#a5a5a5',
			inputTextColor: '#000000',
			inputBorderRadius: 2,
		},

		dark: {
			...themes.dark,
		brandTitle: '<small>Template Von Julian</small>',
			brandUrl: 'https://www.julianwan.com',
	/* 		brandImage: 		noneYet */
			// UI
			appBg: '#111111',
			appContentBg: '#111111',

			appBorderColor: 'transparent',
			appBorderRadius: 2,
			stylePreview: true,

			// Typography
			fontBase:
				'"Inter", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,  "Helvetica Neue", Arial, sans-serif',
			fontCode:
				'"Inter", ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',

			// Text colors
			textColor: '#DDDDDD',
			textInverseColor: '#111111',

			// Toolbar default and active colors
			barTextColor: '#a5a5a5',
			barSelectedColor: '#ffffff',
			barBg: '#0E0E0E',

			// Form colors
			inputBg: '#0E0E0E',
			inputBorder: '#ffffff',
			inputTextColor: '#ffffff',
			inputBorderRadius: 2,
		},
	},
};

export default function Preview(children) {
	return <Layout children={children} />;
}
