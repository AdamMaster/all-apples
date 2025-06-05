import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://allapples.ru',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  exclude: ['/api/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1 : 0.7,
      lastmod: new Date().toISOString()
    }
  }
}

export default config
