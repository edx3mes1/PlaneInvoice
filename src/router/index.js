import Vue from "vue";
import VueRouter from "vue-router";
import Sales from "../Modules/Sales/Views/Sales.vue";
import Main from "../Modules/Main/MainPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/Sales",
    name: "Sales",
    component: Sales
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
