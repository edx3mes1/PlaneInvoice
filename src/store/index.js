import Vue from "vue";
import Vuex from "vuex";
import invoiceController from "../Modules/Sales/Controller/Invoices.js";
import ProductController from "../Modules/Products/Controller/Products.js";
import ModalGlobalController from "../components/Controller/ModalGlobalController.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    invoiceController,
    ProductController,
    ModalGlobalController
  }
});
