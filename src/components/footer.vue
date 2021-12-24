<template>
  <div class="footer-wrapper">
    <div class="dirt">Website Crafted with love by Gavin Pierce</div>
  </div>

  <br />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
</script>
<style>
.dirt {
  color: white;
  justify-content: center;
  padding: 2.5em;
  background-color: #9b7653;
}
.footer-wrapper {
  position: relative;
  z-index: 1;
}
</style>
