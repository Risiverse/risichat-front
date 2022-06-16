<template>
    <div class="px-5 mx-auto w-full">
        <router-view />
    </div>
    <Navbar />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style>
#app {
  @apply font-text
}
</style>
