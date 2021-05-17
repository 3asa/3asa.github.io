module.exports = {
  lang: 'it-IT',
  title: 'Portale 2asa',
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'co_g6xzIMGsLYfhmxP__tq1gk05p9qCYQL4DR_hyTWo'
      }
    ]
  ],
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
        {
          text: 'GGP',
          link: '/ggp/'
        },
        {
          text: 'Esperimenti',
          link: '/esperimenti/'
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
        },
        {
          text: 'Bioarchitettura',
          link: '/intersezione/bioarch.md'
        },
        {
          text: 'Smart Cities',
          link: '/intersezione/smart_cities.md'
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
      ],
      '/ggp/': [
        {
          text: 'Aree Verdi Pubbliche',
          link: '/ggp/2.md'
        },
        {
          text: 'Aree verdi private ma accessibili',
          link: '/ggp/5.md'
        },
        {
          text: 'Viaggi',
          link: '/ggp/6.md'
        },
        {
          text: 'Bei paesaggi e punti da visitare',
          link: '/ggp/7.md'
        },
        {
          text: 'Futuro',
          link: '/ggp/8.md'
        },
        {
          text: 'Altro',
          link: '/ggp/9.md'
        },
        {
          text: 'La mappa',
          link: 'https://www.google.com/maps/d/viewer?mid=1Sl5-ozIkkTOspI-ebujvC-pZrgghoUNs'
        },
      ],
      '/esperimenti/': [
        {
         text: 'CHIMICA'
        },
        {
          text: 'Esperimento diluizioni',
          link: '/esperimenti/diluizioni.md'
        },
        {
          text: 'Esperimento dei gas',
          link: '/esperimenti/gas.md'
        },
        {
          text: 'FISICA',
        },
        {
          text: 'Esperimento ottica',
          link: '/esperimenti/ottica.md'
        },

      ]
    }
  }
}
