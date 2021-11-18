module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    baseSeo: {
      robotsProps: {
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      },
    },
    name: process.env.NAME,
    title: process.env.TITLE,
    slogan: process.env.SLOGAN,
    description: process.env.DESCRIPTION,
    image: process.env.IMAGE,
    githubUrl: process.env.GITHUB_URL,
    country: process.env.COUNTRY,
    locale: process.env.LOCALE,
  },
};
