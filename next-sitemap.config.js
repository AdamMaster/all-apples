/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://allapples.ru',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  additionalPaths: async () => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/news', changefreq: 'weekly', priority: 0.8 },
    { loc: '/partners', changefreq: 'monthly', priority: 0.8 },
    { loc: '/policy', changefreq: 'monthly', priority: 0.8 }
  ]
}

module.exports = config
