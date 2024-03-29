const path = require("path");
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        utils: path.join(__dirname, "utils"),
        styles: path.join(__dirname, "src/styles"),
        images: path.join(__dirname, "src/images")
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
