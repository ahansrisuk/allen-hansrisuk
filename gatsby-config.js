module.exports = {
  siteMetadata: {
    title: `Allen Hansrisuk`,
    description: `Personal portfolio website for Allen Hansrisuk - Freelance front end dev, UX Designer`,
    author: `Allen Hansrisuk`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3dswcf6qeez9`,
        accessToken: `bcMaczSAv4nqZ5rib-Y4jUb6LSX_eI26srLjJQgNzV4`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
