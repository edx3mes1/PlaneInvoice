import listUnits from "../../Products/Models/ListUnits.json";
import form from "../../Products/Models/Unit.json";
// import axios from "axios";
export default {
  namespaced: true,
  state: {
    form: form,
    listUnits: listUnits
  },
  getters: {
    getForm(state) {
      return state.form;
    },
    getListUnit(state) {
      return state.listUnits;
    },
    getListIndex(state) {
      return state.listUnits.length++;
    }
  },
  mutations: {
    SAVEUPDATE(state, payload) {
      state.invoices.push(payload);
    },
    ACTIVEUNIT(state, payload) {
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
    saveUpdateUnit(commit, payload) {
      let valid_data = false;
      if (typeof payload != "undefined" && payload != null) {
        valid_data = payload.id
          ? "id"
          : payload.description
          ? "description"
          : payload.state
          ? "state"
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
        valid_data = payload.id
          ? "id"
          : payload.description
          ? "description"
          : payload.state
          ? "state"
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
