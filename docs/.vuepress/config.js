module.exports = {
    title: 'Aura Docs',
    description: 'Anisoprint Aura Documentation',
    themeConfig: {
        logo: '/assets/img/aura-logo.png',
        smoothScroll: true,
        displayAllHeaders: true, 
        nav: 
        [
          { text: 'Home', link: '/' },
          { text: 'CLI', link: '/cli/' },
          { text: 'Support', link: 'https://support.anisoprint.com' }
        ],
        sidebar: 
        [
            '/',
            ['#', 'Downloads'],
            {
              title: 'Documentation',
              collapsable: false,
              children: [ 
                ['/usage/','Using Aura'],
                ['/settings/','Settings'],
                ['/cli/','CLI'],
              ]
            },
        ]
      }
  }