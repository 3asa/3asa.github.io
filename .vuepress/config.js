const { defaultTheme } = require("vuepress");
module.exports = {
  lang: "it-IT",
  title: "Portale 3asa",
  theme: defaultTheme({
    editLink: false,
    navbar: [
      {
        text: "Tema di Intersezione",
        link: "/intersezione/",
      },
      {
        text: "Epica",
        link: "/epica/",
      },
      {
        text: "GGP",
        link: "/ggp/",
      },
      {
        text: "Esperimenti",
        link: "/esperimenti/",
      },
      {
        text: "Educazione Civica",
        link: "/civica/",
      },
      {
        text: "Esercizi di scrittura",
        link: "/testi/",
      },
      {
        text: "Files",
        link: "https://github.com/3asa/3asa.github.io/tree/main/docs",
      },
    ],
    sidebar: {
      "/intersezione/": [
        {
          text: "Rifiuti",
          link: "/intersezione/rifiuti.md",
        },
        {
          text: "Green Cities",
          link: "/intersezione/green_cities.md",
        },
        {
          text: "Bioarchitettura",
          link: "/intersezione/bioarch.md",
        },
        {
          text: "Smart Cities",
          link: "/intersezione/smart_cities.md",
        },
      ],
      "/epica/": [
        {
          text: "Didone Innamorata",
          link: "/epica/didone_innamorata.md",
        },
        {
          text: "Una fuga sofferta e un addio",
          link: "/epica/fuga_addio.md",
        },
        {
          text: "Trama",
          link: "/epica/trama.md",
        },
        {
          text: "Biografia Virgilio",
          link: "/epica/biog.md",
        },
        {
          text: "Il cavallo di legno e l'ultima notte di Troia",
          link: "/epica/cavallo.md",
        },
        {
          text: "Proemio",
          link: "/epica/proemio.md",
        },
      ],
      "/ggp/": [
        {
          text: "Aree Verdi Pubbliche",
          link: "/ggp/2.md",
        },
        {
          text: "Aree verdi private ma accessibili",
          link: "/ggp/5.md",
        },
        {
          text: "Viaggi",
          link: "/ggp/6.md",
        },
        {
          text: "Bei paesaggi e punti da visitare",
          link: "/ggp/7.md",
        },
        {
          text: "Futuro",
          link: "/ggp/8.md",
        },
        {
          text: "Altro",
          link: "/ggp/9.md",
        },
        /*{
          text: 'La mappa',
          link: 'https://www.google.com/maps/d/viewer?mid=1Sl5-ozIkkTOspI-ebujvC-pZrgghoUNs'
        },*/
      ],
      "/esperimenti/": [
        {
          text: "CHIMICA",
          children: [
            {
              text: "Esperimento diluizioni",
              link: "/esperimenti/diluizioni.md",
            },
            {
              text: "Esperimento dei gas",
              link: "/esperimenti/gas.md",
            },
          ],
        },
        {
          text: "FISICA",
          children: [
            {
              text: "Esperimenti ottica",
              link: "/esperimenti/ottica/",
              children: [
                {
                  text: "Come si propaga la luce?",
                  link: "/esperimenti/ottica/luce.md",
                },
                {
                  text: "Le Ombre",
                  link: "/esperimenti/ottica/ombre.md",
                },
                {
                  text: "La rifrazione",
                  link: "/esperimenti/ottica/rifrazione.md",
                },
              ],
            },
          ],
        },
      ],
      "/civica/": [
        {
          text: "Rispetto per gli altri e inclusività",
          link: "/civica/rispetto.md",
        },
        {
          text: "Dalla ginnastica alle scienze motorie",
          link: "/civica/ginnastica.md",
        },
        {
          text: "Educazione alla convivenza civile",
          link: "/civica/educazioni.md",
        },
        {
          text: "Responsabilità individuali e collettive, regole",
          link: "/civica/responsabilità.md",
        },
        {
          text: "Le Olimpiadi, la Bandiera a 5 cerchi e il fair play",
          link: "/civica/olimpiadi.md",
        },
      ],
      "/testi/": [
        {
          text: "Daniele Basso",
          link: "/testi/basso/",
          children: [
            {
              text: "Lista della spesa",
              link: "/testi/basso/lista.md",
            },
            {
              text: "Lettera di lamentele a un animale domestico",
              link: "/testi/basso/lettera.md",
            },
            {
              text: "Esercizi di stile",
              link: "/testi/basso/stile.md",
            },
            {
              text: "Flusso di coscienza",
              link: "/testi/basso/chaos.md",
            },
            {
              text: "Articolo di giornale",
              link: "/testi/basso/corona.md",
            },
            {
              text: "Teoremi immaginari",
              link: "https://github.com/3asa/3asa.github.io/blob/main/docs/theorema.pdf",
            },
            {
              text: "Recensione di un gioco da tavolo",
              link: "/testi/basso/bluff.md",
            },
          ],
        },
      ],
    },
  }),
};
