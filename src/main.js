import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import errorComponent from "./components/Views/Error.vue";
import warningComponent from "./components/Views/Warning.vue";
import successComponent from "./components/Views/Success.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.component("errorComponent", errorComponent);
Vue.component("warningComponent", warningComponent);
Vue.component("successComponent", successComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  render: (h) => h(App)
}).$mount("#app");
