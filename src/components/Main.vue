<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col> <navBar /></b-col>
      </b-row>
      <b-row>
        <b-container class="bv-example-row" fluid>
          <b-row>
            <b-col cols="3" md="3"> <sideMenu /></b-col>
            <b-col cols="9" md="9">
              <ModalGlobal />
              <router-view></router-view>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import sideMenu from "./Views/SideMenu";
import navBar from "./Views/NavBar";
import ModalGlobal from "./Views/ModalGlobal";
export default {
  components: {
    navBar,
    sideMenu,
    ModalGlobal,
  },
  created() {
    this.$store.dispatch("activeModal", {
      activate: true,
      view: "addProducto",
    });
  },
};
</script>
<style scoped>
</style>
