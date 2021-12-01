import ProElFormTable from "./form-table/index.js";
import ProElTable from "./table/index.js";
import ProElSearch from "./search/index.js";
import ProElUpload from "./upload/index.js";

const components = [ProElTable, ProElFormTable, ProElSearch, ProElUpload];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { ProElTable, ProElFormTable, ProElSearch, ProElUpload };
export default { install };
