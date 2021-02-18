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
                ['/docs/gui/','GUI Overview'],
                ['/docs/macrolayers/','Macrolayers Technology'],
                ['/docs/entities/','Part Internal Structure'],
                ['/docs/supports/','Supports and Overhangs'],
                ['/docs/layuprule/','Layup Structure Scheme'],
              ]
            },
            {
              title: 'Premium Features',
              collapsable: false,
              children: [ 
                ['/docs/premium/masks/','Masks'],
                ['/docs/premium/blockers-enforcers/','Support Blockers and Enforcers'],
                ['/docs/premium/cli/','CLI'],
              ]
            },
            {
              title: 'Licensing',
              collapsable: false,
              children: [ 
                ['docs/licensing/editions/','Aura Editions'],
                ['docs/licensing/activation/','Product Activation'],
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