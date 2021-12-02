module.exports = {
  base: "",
  title: "Element Buff",
  description: "一个简单实用的业务组件库💡",
  head: [["link", { rel: "icon", href: "logo.png" }]],

  markdown: {
    lineNumbers: true,
  },

  plugins: [["vue-demo"]],

  themeConfig: {
    logo: "/logo.png",
    docsDir: "docs",
    displayAllHeaders: true,
    nav: [
      // { text: "介绍", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "Github", link: "https://github.com/uennki" },
    ],
    sidebar: [
      {
        title: "概览",
        collapsable: false,
        // sidebarDepth: 2,
        children: ["/guide/"],
      },

      {
        title: "组件",
        collapsable: false,
        children: getComponents(),
      },
    ],
  },
};

function getComponents() {
  return [["/guide/search", "Search 搜索"]];
}
