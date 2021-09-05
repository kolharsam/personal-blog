require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
const trackingId = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `kolharsam`,
    siteTitle: 'Sameer Kolhar',
    author: '@kolharsam',
    image: 'https://site.groupe-psa.com/content/uploads/sites/9/2016/12/white-background-2-768x450.jpg',
    url: "https://kolharsam.dev"
  },
  plugins: [{
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: `kolharsam-dev`
    }
  },
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
          url: 'https://www.linkedin.com/in/kolharsam',
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
