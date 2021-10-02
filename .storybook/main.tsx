const babel = require('@babel/core')

module.exports = {
	reactOptions: {
		fastRefresh: true,
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	stories: [
		'../src/components/**/*.stories.{js,ts,jsx,tsx,mdx}',
		'../src/components/*.stories.{js,ts,jsx,tsx,mdx}',
	],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-postcss',
		'storybook-dark-mode',
		'storybook-mobile',
	],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
		})

		return config
	},
}
