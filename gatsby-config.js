require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
const trackingId = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Sameer Kolhar`,
    siteTitle: 'Sameer Kolhar',
    author: '@kolharsam'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/kolharsam`,
          },
          {
            name: `GitHub`,
            url: `https://www.github.com/kolharsam`,
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sameer-kolhar-50902717b/',
          },
          {
            name: 'Mail',
            url: 'mailto:me@kolharsam.dev'
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sameer Kolhar`,
        short_name: `kolharsam portfolio`,
        description: `Sameer Kolhar's portfolio and blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
