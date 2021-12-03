# 什么是 Element Buff

## 介绍

一个基于 Element UI，适配 vue2.0 项目的常规业务组件库。以最常见的业务场景封装组件，用数据控制组件渲染。

## 快速上手

第一步：安装 jsx 插件，特定组件需要该插件支持

```bash
yarn add @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
```

在 babel.config.js 中添加下列配置

```js
module.exports = {
  presets: [["@vue/babel-preset-jsx", { injectH: false }]],
};
```

第二步：安装 element-ui 和 element-buff

```bash
yarn add element-ui
yarn add element-buff
```

在 main.js 中写入以下内容

```js
import Vue from "vue";
import ElementUI from "element-ui";
import ElementBuff from "element-buff";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementUI);

Vue.use(ElementBuff); // 全局注册所有组件

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

值得注意一点，当使用 ESlint 等校验时，有时候需要关闭未使用的变量检查，来启动 vue 项目:

```bash
"rules": {
  "no-unused-vars": "off"
}
```
