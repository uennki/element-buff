import Component from "./src/main.vue";

/* istanbul ignore next */
Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
