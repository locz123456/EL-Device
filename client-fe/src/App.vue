<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",
};

</script>

<style>
.back-to-top {
  position: relative;
  z-index: 2;
}
.back-to-top .btn-dark {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2e2e2e;
  border-color: #2e2e2e;
  display: none;
  z-index: 999;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.back-to-top .btn-dark:hover {
  cursor: pointer;
  background: #fa6742;
  border-color: #fa6742;
}
</style>
