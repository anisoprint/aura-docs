module.exports = {
    title: 'Aura Docs',
    description: 'Anisoprint Aura Documentation',
    themeConfig: {
        logo: '/assets/img/aura-logo.png',
        smoothScroll: true,
        displayAllHeaders: false, 
        nav: 
        [
          { text: 'Home', link: '/' },
          { text: 'Support', link: 'https://support.anisoprint.com' }
        ],
        sidebar: 
        [
            //['/', 'Release Notes'],
            {
              title: 'Documentation',
              collapsable: false,
              children: [ 
                ['/docs/supports/','Supports and Overhangs'],
                ['/docs/cli/','CLI'],
              ]
            },
        ]
      },
      plugins: [
        [
          'vuepress-plugin-mathjax',
          {
            target: 'svg',
            macros: {
              '*': '\\times',
            },
          },
        ],
      ],
      markdown: {
        extendMarkdown: md => {
          // use markdown-it plugins
          md.use(require('markdown-it-imsize'))
        }
      }
  }