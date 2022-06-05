<script setup>

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="my-10">
    <router-link to="/">Home</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Importing fonts */
@font-face {
  font-family: Montserrat;
  src: url("assets/fonts/Montserrat-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Montserrat;
  src: url("assets/fonts/Montserrat-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: Montserrat;
  src: url("assets/fonts/Montserrat-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: Cabin;
  src: url("assets/fonts/Cabin-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Cabin;
  src: url("assets/fonts/Cabin-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: Cabin;
  src: url("assets/fonts/Cabin-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
</style>
