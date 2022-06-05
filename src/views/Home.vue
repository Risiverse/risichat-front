<script setup>
import {useSettings} from "@/stores/settings";

const settings = useSettings()
</script>

<template>
  <h1 class="text-2xl text-purple-500">This is the home page</h1>
  <h1 class="text-xl text-green-700">Hello {{settings.username}}</h1>
</template>

<style scoped>

</style>
