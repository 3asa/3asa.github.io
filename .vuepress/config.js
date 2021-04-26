module.exports = {
  lang: 'it-IT',
  title: 'Portale 2asa',
  description: 'La classe di disperati tenta di recuperare!',
  themeConfig: {
    editLink: false,
    smoothScroll: true,
    nav: [
      {
        items: [
          {
            text: 'Tema di Intersezione',
            link: '/intersezione/'
          },
          {
            text: 'Epica',
            link: '/epica/'
          },
        ]
      },
    ],
    sidebar:
      [
        {
          title: 'Tema di intersezione',
          collapsable: false,
          path: '/intersezione/',
          children:
            [
              '/intersezione/rifiuti',
            ]
        },
        {
          title: 'Epica',
          collapsable: false,
          path: '/epica/',
          children:
            [
              '/epica/didone_innamorata.md',
              '/epica/fuga_addio.md',
            ]
        }
      ],
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ]
}
