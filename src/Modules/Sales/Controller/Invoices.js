import form from "../../Sales/Models/form-main.json";
// import axios from "axios";
export default {
  namespaced: true,
  state: {
    form: form,
    invoices: []
  },
  getters: {
    getForm(state) {
      return state.form;
    },
    getListInvoice(state) {
      return state.invoices;
    },
    getListIndex(state) {
      return state.invoices.length++;
    }
  },
  mutations: {
    SAVEUPDATE(state, payload) {
      state.invoices.push(payload);
    },
    VOIDINVOICE(state, payload) {
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
    saveUpdateInvoice(commit, payload) {
      let valid_data = false;
      if (typeof payload != "undefined" && payload != null) {
        valid_data =
          payload.invoice_type_id == ""
            ? "invoice_type_id"
            : payload.pay_type == ""
            ? "pay_type"
            : payload.taxes_included == ""
            ? "taxes_included"
            : payload.employee_id == ""
            ? "employee_id"
            : payload.customer_id == ""
            ? "customer_id"
            : payload.current_date == ""
            ? "current_date"
            : payload.current_time == ""
            ? "current_time"
            : payload.detail == ""
            ? "detail"
            : payload.box_id == ""
            ? "box_id"
            : payload.currency_id == ""
            ? "currency_id"
            : payload.point_of_sales_id == ""
            ? "point_of_sales_id"
            : payload.note == ""
            ? "note"
            : payload.total == ""
            ? "total"
            : payload.sub_total == ""
            ? "sub_total"
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
    voidInvoice(commit, payload) {
      let valid_data = false;
      if (typeof payload != "undefined" && payload != null) {
        valid_data =
          payload.void_note == ""
            ? "void_note"
            : payload.void_date == ""
            ? "void_note"
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
