module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "upwind",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        prefixDefault: true,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
  ],
};
