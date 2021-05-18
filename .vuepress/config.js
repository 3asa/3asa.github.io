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
        {
          text: 'Educazione Civica',
          link: '/civica/'
        },
        {
          text: 'Files',
          link: 'https://github.com/2asa/2asa.github.io/tree/main/docs'
        },
      ],
    sidebar: {
      '/intersezione/': [
        {
          text: 'Rifiuti',
          link: '/intersezione/rifiuti.html'
        },
        {
          text: 'Green Cities',
          link: '/intersezione/green_cities.html'
        },
        {
          text: 'Bioarchitettura',
          link: '/intersezione/bioarch.html'
        },
        {
          text: 'Smart Cities',
          link: '/intersezione/smart_cities.html'
        }
      ],
      '/epica/': [
        {
          text: 'Didone Innamorata',
          link: '/epica/didone_innamorata.html'
        },
        {
          text: 'Una fuga sofferta e un addio',
          link: '/epica/fuga_addio.html'
        }
      ],
      '/ggp/': [
        {
          text: 'Aree Verdi Pubbliche',
          link: '/ggp/2.html'
        },
        {
          text: 'Aree verdi private ma accessibili',
          link: '/ggp/5.html'
        },
        {
          text: 'Viaggi',
          link: '/ggp/6.html'
        },
        {
          text: 'Bei paesaggi e punti da visitare',
          link: '/ggp/7.html'
        },
        {
          text: 'Futuro',
          link: '/ggp/8.html'
        },
        {
          text: 'Altro',
          link: '/ggp/9.html'
        },
        {
          text: 'La mappa',
          link: 'https://www.google.com/maps/d/viewer?mid=1Sl5-ozIkkTOspI-ebujvC-pZrgghoUNs'
        },
      ],
      '/esperimenti/': [
        {
          text: 'CHIMICA',
          isgroup: true,
          children:
            [
              {
                text: 'Esperimento diluizioni',
                link: '/esperimenti/diluizioni.html'
              },
              {
                text: 'Esperimento dei gas',
                link: '/esperimenti/gas.html'
              },
            ]
        },
        {
          text: 'FISICA',
          isgroup: true,
          children:
            [
              {
                text: 'Esperimenti ottica',
                link: '/esperimenti/ottica.html'
              },
            ]
        },
      ],
      '/civica/': [
        {
          text: 'Rispetto per gli altri e inclusività',
          link: '/civica/rispetto.html'
        },
        
        {
        text: 'Dalla ginnastica alle scienze motorie',
         link: '/civica/ginnastica.html'
        },
      ]
    }
  }
}
