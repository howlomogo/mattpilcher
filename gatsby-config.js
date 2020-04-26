module.exports = {
  siteMetadata: {
    title: `Matt Pilcher - Front End Developer`,
    description: `Matt Pilcher - Front End Developer & Designer based in Portsmouth, UK.`,
    author: `Matt Pilcher`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`, // You can put for example src/images, src/data etc
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`, // Adds allMarkdownRemark and markDownRemaek (To get markdown file data)
    {
      resolve: `gatsby-plugin-manifest`, // Look for logo
      options: {
        name: `mattpilcher.co.uk`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mattpilcher.co.uk",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
