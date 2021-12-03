# Element Buff

A library of common business components based on Element, adapted to the use of vue2.0 projects. Simple, efficient, and reusable. It is convenient for front-end developers to develop business quickly.

一个基于 Element 的常用业务组件库，适配 vue2.0 项目使用。简单，高效，复用性强。方便前端开发人员快速开发业务。

## 快速上手

第一步：安装 jsx 插件，特定组件需要该插件支持

```bash
yarn add @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
```

在 babel.config.js 中添加下列配置

```js
module.exports = {
  presets: ["@vue/babel-preset-jsx"],
};
```

第二步：安装 element 和 uennki

```bash
yarn add element-ui
yarn add uennki-ui
```

在 main.js 中写入以下内容

```js
import Vue from "vue";
import ElementUI from "element-ui";
import UennkiUI from "uennki-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementUI);

Vue.use(UennkiUI); // 全局注册所有组件

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

这样，你就可以在 vue 文件中使用内置的业务组件了
