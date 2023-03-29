<template>
  <div>
    <b-modal v-model="modalShow"
      >Hello From Modal!
      <component :is="component"></component>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      modalShow: false,
      component: "successComponent",
    };
  },
  created() {
    this.show();
  },
  computed: {
    ...mapGetters("ModalGlobalController", ["showModal", "closeModal"]),
  },
  methods: {
    ...mapActions("ModalGlobalController", ["changeViewModal"]),
    show() {
      this.modalShow = this.showModal;
    },
  },
};
</script>