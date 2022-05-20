const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	staticDirs: ['../public'],
	core: {
		builder: 'webpack5'
	},
	typescript: {
		check: true,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
		}
	},
	framework: '@storybook/react',
	// Locate the stories
	stories: [
		'../src/components/**/*.stories.{js,ts,jsx,tsx,mdx}',
		'../src/components/*.stories.{js,ts,jsx,tsx,mdx}'
	],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-controls',
		'@storybook/addon-a11y',
		'storybook-mobile',
		'storybook-addon-next-router',
		'storybook-dark-mode',

		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss')
				},
				styleLoaderOptions: {
					implementation: require('style-loader')
				},
				cssLoaderOptions: {
					implementation: require('css-loader')
				}
			}
		}
	],

	webpackFinal: (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
		});
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			// @ts-ignore
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions
			})
		];
		return config;
	}
};
