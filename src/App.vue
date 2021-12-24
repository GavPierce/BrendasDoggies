<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./views/Home.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <Header />
  <Home />
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Mukta", sans-serif;
}
body {
  margin: 0;
}
</style>
