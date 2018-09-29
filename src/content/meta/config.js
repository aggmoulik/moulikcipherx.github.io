const base = {
  name: 'PyJaipur',
  url: 'https://github.com/pyjaipur'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } `,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Python User Group Jaipur',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  //author
  authorName: 'PyJaipur',
};

module.exports = config;
