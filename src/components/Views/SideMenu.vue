<template>
  <div>
    <div style="width: 280px; height: 100% !important">
      <ul class="nav" v-for="item in options" :key="item.id">
        <li class="nav-item active">
          <router-link :to="item.url" class="nav-link" aria-current="page">
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            {{ item.nameOption }}
          </router-link>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>Settings</strong>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-light text-small shadow"
          aria-labelledby="dropdownUser1"
          style=""
        >
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "../Models/Menu.json";
export default {
  data() {
    return {
      options: menu,
    };
  },
};
</script>

<style scoped>
b-sidebar {
  position: fixed;
  z-index: 1000;
}
</style>