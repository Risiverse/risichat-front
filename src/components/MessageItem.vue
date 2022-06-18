<template>
    <p>{{ message.content }}</p>
</template>

<script setup>
const props = defineProps({
    message: Object
})
</script>

<style scoped>

</style>
