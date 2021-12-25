<template>
  <div class="contact-wrapper" id="contact">
    <div class="contact-title">Let's get you your puppy.</div>
    <div class="contact-subtitle">
      To buy a puppy or to find out more information please contact Brenda at:
      <br />
      <strong style="color: #6ac0ba"
        ><a href="mailto:BKBEAHM@msn.com">BKBEAHM@msn.com</a>
      </strong>
    </div>
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  padding: 3em;
  position: relative;
  z-index: 10;
  background-color: white;
}
.contact-title {
  font-size: 70px;
  color: #6ac0ba;
}
.circle {
  width: 20vw;
  height: 20vw;
  position: absolute;
  top: 0;
  right: 5vw;
  border-radius: 50%;
  background-color: #ffcf00;
  z-index: 10;
  animation: bounce 5s infinite;
}
.contact-subtitle {
  padding: 2em 0;
  font-size: larger;
}
a {
  text-decoration: none;
  color: #6ac0ba;
}
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
