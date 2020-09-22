<template>
  <div id="app" class="intro">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import { routes } from "./routes";
import Navbar from "./components/shared/navbar/Navbar.vue";

import FormUser from "./components/formUser/FormUser.vue";

export default {
  name: "app",
  components: {
    Navbar,
    FormUser
  },

};
</script>

<style scoped>


</style>
