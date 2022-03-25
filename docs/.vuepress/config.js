module.exports = {
  title: "Aura Docs",
  description: "Anisoprint Aura Documentation",
  themeConfig: {
    logo: "/assets/img/aura-logo.png",
    docsDir: "docs/",
    smoothScroll: true,
    displayAllHeaders: false,
    nav: [
      { text: "Aura", link: "/aura/" },
      { text: "Aura.Connect", link: "/aura-connect/" },
      { text: "Support", link: "https://support.anisoprint.com" },
    ],
    sidebar: {
      "/aura/": [
        //['/', 'Release Notes'],
        {
          title: "Documentation",
          collapsable: false,
          children: [
            ["/aura/gui/", "GUI Overview"],
            ["/aura/macrolayers/", "Macrolayers Technology"],
            ["/aura/entities/", "Part Internal Structure"],
            ["/aura/supports/", "Supports and Overhangs"],
            ["/aura/layuprule/", "Layup Structure Scheme"],
          ],
        },
        {
          title: "Premium Features",
          collapsable: false,
          children: [
            ["/aura/premium/masks/", "Masks"],
            [
              "/aura/premium/blockers-enforcers/",
              "Support Blockers and Enforcers",
            ],
            ["/aura/premium/cli/", "CLI"],
          ],
        },
        {
          title: "Licensing",
          collapsable: false,
          children: [
            ["/aura/licensing/editions/", "Aura Editions"],
            ["/aura/licensing/activation/", "Product Activation"],
          ],
        },
      ],
      "/aura-connect/": [
        {
          title: "Documentation",
          collapsable: false,
          children: [
            ["/aura-connect/getting-an-account/", "Getting an Account"],
            ["/aura-connect/quickstart/", "Quickstart"],
            ["/aura-connect/gui/", "GUI Overview"],
          ],
        },
      ],
    },
    sidebarDepth: 2,
  },
  extraWatchFiles: [".vuepress/config/**"],
  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      // use markdown-it plugins
      md.use(require("markdown-it-imsize"));
    },
  },
};
