<template>
  <div class="header">
    <div class="logo-text"><a href="#">Brenda's Doggies</a></div>
    <div class="menu">
      <a href="#dogs">Our Doggies</a>
      <a href="#about">About Brenda</a>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta&family=Pushster&display=swap");
.header {
  display: flex;
  position: sticky;
  justify-content: space-around;
  top: 0;
  background-color: white;
  z-index: 99;
  border-radius: 0;
}
.logo-text a {
  color: #6ac0ba;

  font-size: xx-large;
  text-decoration: none;
  font-family: "Pushster", cursive;
}
.logo-text {
  padding: 0.5em;
}
.menu {
  width: 50%;
  justify-self: center;
  display: flex;
  padding-top: 0.5em;
  justify-content: space-around;
}
.menu a {
  color: #6ac0ba;

  font-size: 1.3em;
  text-decoration: none;
}
</style>
