module.exports = {
  lang: 'it-IT',
  title: 'Portale 2asa',
  description: 'La classe di disperati tenta di recuperare!',
  themeConfig: {
    editLink: false,
    smoothScroll: true,
    navbar:
    [
      {
        text: 'Tema di Intersezione',
        link: '/intersezione/'
      },
      {
        text: 'Epica',
        link: '/epica/'
      },
    ],
    sidebar:
    [
      {
        text: 'Tema di Intersezione',
        link: '/intersezione/',
        isGroup: true,
        children: [
          {
            text: 'Rifiuti',
            link: '/intersezione/rifiuti.md'
          }
        ],
      },
      {
        text: 'Epica',
        link: '/epica/',
        isGroup: true,
        children: [
          {
            text: 'Didone Innamorata',
            link: '/epica/didone_innamorata.md'
          },
          {
            text: 'Una fuga sofferta e un addio',
            link: '/epica/fuga_addio.md'
          }
        ]
      },
    ]
  }
}
