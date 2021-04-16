const { description } = require('../package')

module.exports = {
  title: 'Portale 2asa',
  description: 'La classe di disperati tenta di recuperare!',
  head: [
    [
        'meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }
    ],
    ['meta',
      {
        name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'
      }
    ]
  ],
  themeConfig: {
    editLink: false,
    smoothScroll: true,
    nav: [
      {
        items: [
          {
            text: 'Chi siamo',
            link: '/chisiamo/'
          },
          {
            text: 'Rifiuti',
            link: '/rifiuti/'
          },
        ]
      },
    ],
    sidebar:
      [
        {
          title: 'Chi siamo',
          path: '/chisiamo/',
        },
        {
          title: 'Tema di intersezione',
          collapsable: false,
          children:
            [
              '/rifiuti/',
            ]
        }
      ],
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ]
}
