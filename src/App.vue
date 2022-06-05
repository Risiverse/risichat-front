<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <router-view />
</template>

<style>
#app {
  @apply font-text;
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
