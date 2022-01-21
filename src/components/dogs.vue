<template>
  <div class="dogs-wrapper" id="dogs">
    <div class="title">Available Puppies</div>
    <div class="parent-wrapper">
      <div class="parent">
        <div class="parent-sex-dad">Dad</div>
        <div class="dad-box"><img src="../assets/dadDog.jpg" alt="" /></div>
        <div class="parent-breed-dad">American Bulldog</div>
      </div>
      <div class="parent">
        <div class="parent-sex-mom">Mom</div>
        <div class="mom-box"><img src="../assets/momDog.jpg" alt="" /></div>
        <div class="parent-breed-mom">Blue Healer</div>
      </div>
    </div>
    <div class="litter-card">
      <div class="litter-card-color"></div>
      <div class="icon"><img src="../assets/puppyIcon.png" alt="" /></div>
      <div class="card-name">Bull Healers</div>
      <div class="card-subname">American Bulldog x Blue Healer</div>
      <div class="card-view-pics" @click="showPuppies = !showPuppies">
        View Pics
      </div>
      <div class="card-stats">
        <div class="puppies-left">
          <div class="card-stats-number">5</div>
          <div class="card-stats-text">Puppies Left</div>
        </div>
        <div class="days-since-birth">
          <div class="card-stats-number">{{ calculatDaysOld }}</div>
          <div class="card-stats-text">Days Old</div>
        </div>
      </div>
      <a href="#contact" style="text-decoration: none">
        <div class="card-action">Buy Now</div>
      </a>
    </div>
  </div>
  <div class="img-wrapper" v-if="showPuppies">
    <div class="close-img" @click="showPuppies = false">X</div>
    <vueper-slides fixed-height="90vh">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :image="slide.image"
      />
    </vueper-slides>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import Puppy from "../assets/puppy.jpg";

import Puppy1 from "../assets/puppy-1.jpg";
import Puppy2 from "../assets/puppy-2.jpeg";
import Puppy3 from "../assets/puppy-3.jpeg";
import Puppy4 from "../assets/puppy-4.jpg";
import Puppy5 from "../assets/puppy-5.jpg";

import "vueperslides/dist/vueperslides.css";
let showPuppies = ref(false);
let slides = ref([
  {
    title: '<b style="font-size: 1.3em;color: white">Male</b>',
    image: Puppy,
  },
  {
    title: '<b style="font-size: 1.3em;color: white">Male</b>',
    image: Puppy1,
  },
  {
    title: '<b style="font-size: 1.3em;color: white">Female</b>',
    image: Puppy5,
  },
  {
    title: '<b style="font-size: 1.3em;color: white">Male</b>',
    image: Puppy2,
  },
  {
    title: '<b style="font-size: 1.3em;color: white">Male</b>',
    image: Puppy3,
  },
  {
    title: '<b style="font-size: 1.3em;color: white">Male</b>',
    image: Puppy4,
  },
]);

let dateOfBirth = Date.parse("2021-12-19");
let todaysDate = Date.now();
let daysOld = ref(1);

const calculatDaysOld = computed(() => {
  return Math.floor((todaysDate - dateOfBirth) / (1000 * 60 * 60 * 24));
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");
.vueperslide__title {
  color: white;
}
.dogs-wrapper {
  padding: 2em;
  background: #f9f4ec;
  border-radius: 20%;
}
.title {
  padding: 2em 0 0 0;
  font-family: "Mukta", sans-serif;
  font-weight: bold;
  color: black;
  font-size: xx-large;
}
.parent-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.parent {
  color: white;
  font-size: x-large;
  font-weight: bold;
}
.parent-sex-dad {
  background-color: #ffcf00;
  margin-bottom: 0.5em;
  border-radius: 15px 0;
  letter-spacing: 3px;
}
.parent-sex-mom {
  letter-spacing: 3px;
  background-color: #6ac0ba;
  margin-bottom: 0.5em;
  border-radius: 0 15px;
}

.dad-box {
  width: 10em;
  height: 10em;
  border-radius: 20%;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.mom-box {
  width: 10em;
  height: 10em;
  border-radius: 20%;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.mom-box img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.dad-box img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.parent-breed-mom {
  color: black;
}
.parent-breed-dad {
  color: black;
}
.litter-card {
  margin: auto;
  transition: transform 0.2s; /* Animation */
  justify-content: center;
  align-items: center;
  width: 20em;
  -webkit-backdrop-filter: blur(8px); /* Safari 9+ */
  backdrop-filter: blur(8px); /* Chrome and Opera */
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.496);
  border-radius: 20px;
}
.litter-card-color {
  height: 5em;
  border-radius: 20px 20px 0 0;

  background-color: #ffcf00;
}
.icon {
  margin: -50px auto;
}
.icon img {
  width: 7em;
  height: 7em;
  border-radius: 3em;
  object-fit: fill;
}
.card-name {
  margin-top: 50px;
  font-size: x-large;
}
.card-subname {
  color: grey;
  font-weight: 100;
}
.card-stats {
  display: flex;
  justify-content: space-evenly;
}
.card-stats-number {
  color: #6ac0ba;
  font-size: xx-large;
  margin-top: 20px;
}
.card-stats-text {
  color: grey;
  font-size: small;
}
.card-action {
  padding: 15px;
  color: black;
  background-color: #ffcf00;
  margin-top: 10px;
  font-size: x-large;
  border-radius: 0 0 20px 20px;
  cursor: pointer;
}
.litter-card:hover {
  transform: scale(1.1);
}
.card-view-pics {
  padding: 0.5em 1em;
  color: white;
  font-size: small;
  margin: auto;
  cursor: pointer;
  width: max-content;
  background-color: #6ac0ba;
  border-radius: 15px;
}
.close-img {
  font-size: 2em;
  font-weight: bolder;
  position: absolute;
  right: 2em;
  top: 2em;
  cursor: pointer;
  color: #ffcf00;

  z-index: 100;
  width: 2em;
}
.img-wrapper {
  position: fixed;
  top: 2em;
  left: calc(50% - 15em);
  z-index: 99;
  width: 30em;
  height: auto;
  max-width: 100%;
  border: 3px solid #6ac0ba;
}
.img-wrapper img {
  object-fit: cover;
}
@media only screen and (max-width: 600px) {
  .parent-sex-mom {
    margin-top: 2em;
  }
  .img-wrapper {
    left: 0;
  }
}
</style>
