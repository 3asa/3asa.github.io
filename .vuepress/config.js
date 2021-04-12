const { description } = require('../package')

module.exports = {
  title: 'Portale 2asa',
  description: description,
  head: [
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ],
  themeConfig: {
    editLink: false,
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Chi siamo',
        link: '/chisiamo/'
      }
    ],
    sidebar: {
      '/chsiamo/': [
        {
          title: 'Chi siamo',
          collapsable: false,
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
