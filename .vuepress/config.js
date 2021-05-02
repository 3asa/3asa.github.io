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
    sidebar: {
      '/intersezione/': [
        {
          text: 'Rifiuti',
          link: '/intersezione/rifiuti.md'
        },
        {
          text: 'Green Cities',
          link: '/intersezione/green_cities.md'
        }
      ],
      '/epica/': [
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
  }
}
