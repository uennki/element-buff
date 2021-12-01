import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import UennkiUI from "/src/packages/index.js";

export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(UennkiUI);
};
