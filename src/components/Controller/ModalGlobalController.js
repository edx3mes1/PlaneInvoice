export default {
  namespaced: true,
  state: {
    status: false
  },
  getters: {
    showModal(state) {
      return (state.status = true);
    },
    closeModal(state) {
      return (state.status = false);
    }
  },
  mutations: {
    ACTIVATE_CHANGE_VIEW_MODAL(state, payload) {
      state.status = {
        status: payload.status,
        view: payload.view
      };
    }
  },
  actions: {
    changeViewModal(commit, payload) {
      commit("ACTIVATE_CHANGE_VIEW_MODAL", payload);
    }
  }
};
