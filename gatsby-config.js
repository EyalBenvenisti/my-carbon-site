module.exports = {
  siteMetadata: {
    title: 'Eyal Benvenisti Portfolio',
    description: 'Another website on the web',
    keywords: 'eyal benvenisti, portfolio',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/my-carbon-site/',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
