<template>
  <div class="hero-wrapper">
    <h1 class="hero-text">
      Keeping your best friend healthy and happy until you come pick him up
    </h1>
    <h3 class="hero-subtext">Discover what breeds Brenda has available now</h3>
    <a href="#dogs" style="text-decoration: none; color: black">
      <div class="hero-button">See Available Doggies</div></a
    >

    <div class="tennis-ball"><img src="../assets/tennisball.svg" alt="" /></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero-wrapper {
  height: 70vh;
  margin-top: 0;
  background: #6ac0ba;
  padding: 2em;
  border-radius: 0 0 20% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-text {
  color: white;
  font-size: 2.5em;
  line-height: 50px;
  max-width: 70%;
  z-index: 3;
}
.hero-subtext {
  color: white;
  font-weight: 400;
  position: relative;
  z-index: 2;
}
.hero-button {
  padding: 15px 15px;
  background-color: #ffcf00;
  border-radius: 10px;
  font-weight: 500;
}
.hero-button:hover {
  cursor: pointer;
}
.tennis-ball {
  position: absolute;
  bottom: 45%;
  right: 30%;
  z-index: 0;
  width: 5em;
  animation-name: bounce;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}
@media only screen and (max-width: 600px) {
  .hero-wrapper {
    max-width: 100%;
  }
}
@keyframes bounce {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: rotate(-180deg) translate(-200px, 0);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
