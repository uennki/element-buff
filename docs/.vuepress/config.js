module.exports = {
  base: "",
  title: "Hello VuePress",
  description: "Just playing around",

  configureWebpack: {
    resolve: {
      alias: {
        "@": "/docs/guide",
      },
    },
  },

  markdown: {
    lineNumbers: true,
  },

  plugins: [["vue-demo"]],

  themeConfig: {
    logo: "/logo.png",
    docsDir: "docs",
    displayAllHeaders: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "Github", link: "https://github.com/uennki" },
    ],
    sidebar: [
      {
        title: "概览",
        collapsable: false,
        sidebarDepth: 1,
        children: ["/guide/"],
      },

      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 0,
        children: getComponents(),
      },
    ],
  },
};

function getComponents() {
  return [["/guide/search", "Search 搜索"]];
}
