const locales = {
  '/': {
    title: 'Anno.js',
    description: 'Anno.js doc.'
  },
}

const themeConfigLocales = {
  '/': {
    label: 'Anno.js',
    selectText: 'Documents',
    editLinkText: 'GitHub',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/stonychen/anno.js.git'
      },
    ],
    sidebar: [
      '/',
      {
        title: 'Guide',
        collapsable: true,
        children: [
          '/guide/conventions',
          '/guide/structure',
          '/guide/vue',
          '/guide/style',
          '/guide/unit-testing',
          '/guide/deployment',
        ]
      },
      {
        title: 'Optimization',
        collapsable: true,
        children: [
          '/optimization/preload-prefetch',
        ]
      },
    ]
  },
}

const list = [
]
list.forEach(item => {
  locales[item.base] = item.locales
  themeConfigLocales[item.base] = item.themeConfig.locales
})

module.exports = {
  base: '/anno.js/',
  locales,
  head: [
    ['link', { rel: 'icon', href: '/logo-yellow.svg' }]
  ],
  lastUpdated: 'Last Updated',
  serviceWorker: true,
  themeConfig: {
    docsDir: 'docs',
    locales: themeConfigLocales,
    logo: '/logo-yellow.svg',
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
  ]
}

