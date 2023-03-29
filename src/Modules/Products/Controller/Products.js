import listProducts from "../../Products/Models/Products.json";
import form from "../../Products/Models/Products.json";
// import axios from "axios";
export default {
  namespaced: true,
  state: {
    form: form,
    listProducts: listProducts
  },
  getters: {
    getForm(state) {
      return state.form;
    },
    getListInvoice(state) {
      return state.listProducts;
    },
    getListIndex(state) {
      return state.listProducts.length++;
    }
  },
  mutations: {
    SAVEUPDATE(state, payload) {
      state.invoices.push(payload);
    },
    ACTIVATEPRODUCT(state, payload) {
      state.invoices.push(payload);
    },
    ADDITEMTODETAIL(state, payload) {
      state.form.detail.push(payload);
    },
    REMOVEITEMTODETAIL(state, payload) {
      let index = form.detail.indexOf(payload);
      if (index !== -1) {
        state.form.detail.splice(index, 1);
      }
    },
    EDITITEMTODETAIL(state, payload) {
      let index = form.detail.indexOf(payload);
      if (index !== -1) {
        state.form.detail[index] = payload;
      }
    }
  },
  actions: {
    saveUpdateProduct(commit, payload) {
      let valid_data = false;
      if (typeof payload != "undefined" && payload != null) {
        valid_data =
          payload.id == ""
            ? "id"
            : payload.description == ""
            ? "description"
            : payload.price == ""
            ? "price"
            : payload.cost == ""
            ? "cost"
            : payload.taxes_percent == ""
            ? "taxes_percent"
            : payload.taxes_include == ""
            ? "taxes_include"
            : payload.state == ""
            ? "state"
            : payload.existence == ""
            ? "existence"
            : payload.unit_id == ""
            ? "unit_id"
            : true;
        if (valid_data) {
          alert("this field " + valid_data + " is empty");
          return;
        }
        if (!valid_data) {
          commit("SAVEUPDATE", payload);
        }
      }
    },
    activeProduct(commit, payload) {
      let valid_data = false;
      if (typeof payload != "undefined" && payload != null) {
        valid_data = valid_data =
          payload.id == ""
            ? "id"
            : payload.description == ""
            ? "description"
            : payload.price == ""
            ? "price"
            : payload.cost == ""
            ? "cost"
            : payload.taxes_percent == ""
            ? "taxes_percent"
            : payload.taxes_include == ""
            ? "taxes_include"
            : payload.state == ""
            ? "state"
            : payload.existence == ""
            ? "existence"
            : payload.unit_id == ""
            ? "unit_id"
            : true;
      }
      if (valid_data) {
        alert("this field " + valid_data + " is empty");
        return;
      }
      if (!valid_data) {
        payload.void_status = true;
        commit("VOIDINVOICE", payload);
      }
    }
  }
};
