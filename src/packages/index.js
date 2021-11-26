import ProElTable from "./table/index.js";
import ProElFormTable from "./form-table/index.js";

const components = [ProElTable, ProElFormTable];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { ProElFormTable };
export default { install };
