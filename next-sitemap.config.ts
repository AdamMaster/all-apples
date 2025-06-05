import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://allapples.ru',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  sitemapSize: 5000,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1 : 0.7,
      lastmod: new Date().toISOString()
    }
  }
}

export default config
