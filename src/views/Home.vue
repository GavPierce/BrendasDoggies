<template>
  <div class="home-wrapper">
    <Hero></Hero>
    <Dogs></Dogs>
    <About></About>
    <Contact></Contact>
  </div>
</template>
<script setup lang="ts">
import Dogs from "../components/dogs.vue";
import Hero from "../components/hero.vue";
import About from "../components/about.vue";
import Contact from "../components/contact.vue";
import { ref } from "vue";
</script>
<style scoped>
.home-wrapper {
  overflow: hidden;
}
</style>
