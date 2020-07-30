module.exports = {
    title: 'Aura Docs',
    description: 'Anisoprint Aura Documentation',
    dest: './docs/.vuepress/dist/docs',
    base: '/docs/',
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
                ['/supports/','Supports and Overhangs'],
                ['/cli/','CLI'],
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