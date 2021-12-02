---
title: '什么是Uennki UI'
---

## 介绍

一个基于 `vue2.0` 和 `Element UI 2x` 版本的常规业务组件库。增强在表单输入，列表搜索，表格展示操作等常见业务系统中使用。可以有效的节约前端的搬砖时间，提高开发效率，减少加班秃头。

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
