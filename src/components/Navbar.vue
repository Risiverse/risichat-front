<template>
  <nav class="fixed shadow-2xl flex justify-around w-full z-10 py-5 bottom-0">
    <RouterLink to="/"><PlusCircleIcon class="text-gray-300 h-7 w-7" /></RouterLink>
    <RouterLink to="/"><ChatAlt2Icon class="text-primary h-7 w-7" /></RouterLink>
    <RouterLink to="/"><CogIcon class="text-gray-300 h-7 w-7" /></RouterLink>
  </nav>
</template>

<script setup>
import {ChatAlt2Icon, PlusCircleIcon, CogIcon} from '@heroicons/vue/solid'

</script>


<style scoped>

</style>