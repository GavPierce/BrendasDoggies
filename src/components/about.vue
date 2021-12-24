<template>
  <div class="about-wrapper">
    <div style="color: #6ac0ba">About Brenda</div>
    <div class="about-wrapper-title">
      Brenda
      <span class="loves">loves</span>
      animals
    </div>
    <div class="circle"></div>
    <div class="about-text">
      Brenda has been caring for and raising animals for over <b>50</b> years.
      After 50 years you learn a thing or two. An experienced animal handler and
      care taker raising and breeding a variaty of animals,
      <i>including award winning Tennessee Walking Horses.</i> <br />Based in
      Central Oregon Brenda raises and breeds only the best puppies to add to
      your family. Brenda's' Doggies are socialized and cared for until they can
      find a loving and capable home.
    </div>
  </div>
</template>

<style scoped>
.about-wrapper {
  border-radius: 10%;
  overflow: hidden;
  padding: 5em;
  overflow: hidden;
}
.about-wrapper-title {
  font-size: 70px;
  width: 100%;
}
.loves {
  font-weight: bold;
  color: #ffcf00;
  text-shadow: -5px 5px rgba(128, 128, 128, 0.639);
}
.circle {
  width: 50vw;
  height: 50vw;
  position: absolute;
  z-index: 1;
  left: -25vw;
  border-radius: 50%;
  background-color: #6ac0ba;
}
.about-text {
  width: 20%;
  margin: 0 auto;
  text-align: center;
  line-height: 25px;
  padding: 1em;
  background-color: transparent;
  border-radius: 7px;
  border: #ffcf00 1px solid;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 20px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
