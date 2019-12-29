module.exports = {
  siteMetadata: {
    title: `Octosign`,
    description: `Desktop electronic signature software. Sign your document (PDF, DOC, JPG...) using image or cryptography.`,
    author: `Jakub Duras`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Octosign - desktop electronic signature software`,
        short_name: `Octosign`,
        start_url: `/`,
        background_color: `#EBEEF4`,
        theme_color: `#1A1F33`,
        display: `minimal-ui`,
        icon: `static/icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
  ],
}
