// 加入 IE11 所需 polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
import "whatwg-fetch"; // 若使用 fetch API

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
