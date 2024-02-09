module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,jpeg,css,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};