<template>
    <div class="w-full">
        <router-view />
    </div>
    <Navbar v-if="route.name !== 'Groupe' && route.name !== 'Login'" />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import {useSettingsStore} from "@/stores/settings";
import {useRoute, useRouter} from "vue-router";
import {onMounted, watch} from 'vue';

const route = useRoute()
const router = useRouter()
const settingsStore = useSettingsStore()

watch(route, () => {
    if (!settingsStore.username && route.name !== 'Login') {
        router.push({name: 'Login'})
    }
})

onMounted(() => {
    if (localStorage.getItem('username')) {
        settingsStore.username = localStorage.getItem('username')
        router.push({name: 'Home'})
    } else {
        router.push({name: 'Login'})
    }
})

</script>

<style>
.responsive-container{
    @apply px-5 mx-auto sm:px-10 lg:px-24 2xl:px-48
}

#app {
  @apply font-text
}
</style>
