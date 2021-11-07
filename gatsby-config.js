module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/src/data/skills.json`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
    },
    "gatsby-plugin-postcss",
  ],
};
