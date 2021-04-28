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
        children: [
          {
            text: 'Rifiuti',
            link: '/intersezione/rifiuti'
          }
        ],
      },
      {
        text: 'Epica',
        link: '/epica/',
        children: [
          {
            text: 'Didone Innamorata',
            link: '/epica/didone_innamorata'
          },
          {
            text: 'Una fuga sofferta e un addio',
            link: '/epica0/fuga_addio'
          }
        ]
      },
    ]
  }
}
