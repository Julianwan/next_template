import { themes } from '@storybook/theming';
import React from 'react';
import '@/styles/globals.scss';
import Layout from './layout';
import './storybook.scss';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />
});

const customViewports = {
	iphone13mini: {
		name: 'iPhone 13 Mini (xs)',
		styles: {
			height: '812px',
			width: '375px'
		},
		type: 'mobile'
	},
	iphone13promax: {
		name: 'iPhone 13 Pro Max (sm)',
		styles: {
			height: '926px',
			width: '428px'
		},
		type: 'mobile'
	},

	ipadmini: {
		name: 'iPad Mini (md)',
		styles: {
			height: '1024px',
			width: '768px'
		},
		type: 'tablet'
	},
	ipad12p: {
		name: 'iPad Pro 12.9-in (lg)',
		styles: {
			height: '1366px',
			width: '1024px'
		},
		type: 'tablet'
	},
	imac: {
		name: 'iMac (xl)',
		styles: {
			height: '720px',
			width: '1280px'
		},
		type: 'desktop'
	},
	macbookppro: {
		name: 'Macbook Pro (2xl)',
		styles: {
			height: '900px',
			width: '1440px'
		},
		type: 'desktop'
	},
	desktopmonitor: {
		name: 'Desktop Monitor (3xl)',
		styles: {
			height: '1080px',
			width: '1920px'
		},
		type: 'desktop'
	}
};

export const parameters = {
	nextRouter: {
		Provider: RouterContext.Provider
	},
	viewport: { viewports: { ...customViewports } },
	backgrounds: { disable: true },
	actions: { argTypesRegex: '^on[A-Z].*' },
	fullscreen: 'true',
	options: {
		storySort: {
			order: [
				'Atoms',
				'Elements',
				'Molecules',
				'Headers',
				'Features',
				'Sections',
				'Layouts',
				'Pages',
				'Content',
				'*',
				'WIP'
			]
		}
	},
	darkMode: {
		styledPreview: true,
		current: 'dark',
		classTarget: 'html',
		darkClass: 'dark',
		light: {
			...themes.light,
			appBg: '#DDDDDD',

			brandTitle: 'Julian Wan',
			appContentBg: '#F5F5F5',
			appBorderColor: 'transparent',
			appBorderRadius: 5,

			// Typography
			fontBase:
				'"SF Pro", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,  "Helvetica Neue", Arial, sans-serif',
			fontCode:
				'"SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',

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
			inputBorderRadius: 5
		},
		dark: {
			...themes.dark,
			appBg: '#000000',
			brandTitle: 'Julian Wan',
			brandUrl: 'https://ux.julianwan.com',

			appContentBg: '#0E0E0E',
			appBorderColor: 'transparent',
			appBorderRadius: 5,

			// Typography
			fontBase:
				'"SF Pro", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,  "Helvetica Neue", Arial, sans-serif',
			fontCode:
				'"SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',

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
			inputBorderRadius: 5
		}
	}
};

export default function Preview(children) {
	return <Layout children={children} />;
}
