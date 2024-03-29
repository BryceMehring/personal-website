export default {
  siteMetadata: {
    title: `Bryce Mehring`,
    description: `Bryce Mehring's personal website`,
    email: `brycemehring@gmail.com`,
    github: `https://github.com/BryceMehring`,
    siteUrl: `https://brycemehring.com`,
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/projects`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'avif'],
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
  ],
};
