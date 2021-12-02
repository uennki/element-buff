import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import UennkiUI from "/src/packages/index.js";

export default async ({ Vue, options, router }) => {
  Vue.use(ElementUI);
  Vue.use(UennkiUI);
};
