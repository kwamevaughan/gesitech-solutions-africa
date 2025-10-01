/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://gesitech.africa",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  // Additional paths to include
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/terms"),
    await config.transform(config, "/privacy"),
  ],
};
