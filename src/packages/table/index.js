// import Table from "./src/main.vue";
import Table from "./src/render.js";

/* istanbul ignore next */
Table.install = function (Vue) {
  Vue.component(Table.name, Table);
};

export default Table;
