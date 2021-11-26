// import FormTable from "./src/main.vue";
import FormTable from "./src/render.js";

/* istanbul ignore next */
FormTable.install = function (Vue) {
  Vue.component(FormTable.name, FormTable);
};

export default FormTable;
