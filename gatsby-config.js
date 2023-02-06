module.exports = {
  siteMetadata: {
    title: `manzanotree`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'work',
        'path': './src/work',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Unna`,
            file: `https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap`,
          },
        ],
      },
    },
  ]
};