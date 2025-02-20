const { typescript: preprocessTS } = require('svelte-preprocess');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: [preprocessTS()]
	}
};
