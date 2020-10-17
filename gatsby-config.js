module.exports = {
  siteMetadata: {
    title: `Camp Bos Collective`,
    description: `A COLLECTIVE OF ARTIST, BEAT MAKERS, DESIGNERS, COMICS, AND CREATIVES.`,
    author: `Camp Nos`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CampNos`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/CampNosLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shows`,
        path: `${__dirname}/content/shows`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/content/episodes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bios`,
        path: `${__dirname}/content/bios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-typescript",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
