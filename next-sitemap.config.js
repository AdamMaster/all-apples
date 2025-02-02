/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: 'https://apple07.ru',
	generateRobotsTxt: true,
	additionalPaths: async () => [
		{ loc: '/', changefreq: 'weekly', priority: 1.0 },
		{ loc: '/partners', changefreq: 'monthly', priority: 0.8 },
		{ loc: '/policy', changefreq: 'monthly', priority: 0.8 },
	],
};

module.exports = config;