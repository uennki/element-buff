import Component from "./src/render.js";

/* istanbul ignore next */
Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
