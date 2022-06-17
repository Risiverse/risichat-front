<template>
    <div class="w-full">
        <router-view />
    </div>
    <Navbar v-if="route.name !== 'Groupe'" />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style>
.responsive-container{
    @apply px-5 mx-auto
}

#app {
  @apply font-text
}
</style>
