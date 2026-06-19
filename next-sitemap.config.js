/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://coreinvision.com",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/404",
    "/icon",
    "/apple-icon",
    "/manifest.webmanifest",
    "/opengraph-image",
    "/feed.xml",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
  },
};
