<template>
    <div class="absolute h-screen w-screen -z-50 dark:bg-gray-800"></div>
    <div class="w-full dark:bg-gray-800 dark:text-white">
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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        settingsStore.toggleDarkMode(true)
    } else {
        settingsStore.toggleDarkMode(false)
    }


    if (localStorage.getItem('username')) {
        settingsStore.username = localStorage.getItem('username')
        if (route.name === 'Login') {
            router.push({name: 'Home'})
        }
    } else {
        router.push({name: 'Login'})
    }
})

</script>

<style>
.responsive-container{
    @apply px-5 mx-auto sm:px-10 lg:px-24 2xl:px-48 3xl:px-[36rem] 4xl:px-[46rem]
}

#app {
  @apply font-text
}

@font-face {
    font-family: "HindMadurai";
    font-weight: 400;
    font-style: normal;
    src: url("@/assets/fonts/HindMadurai-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "HindMadurai";
    font-weight: 500;
    font-style: normal;
    src: url("@/assets/fonts/HindMadurai-Medium.ttf") format("truetype");
}

@font-face {
    font-family: "HindMadurai";
    font-weight: 600;
    font-style: normal;
    src: url("@/assets/fonts/HindMadurai-SemiBold.ttf") format("truetype");
}

@font-face {
    font-family: "Rubik";
    font-weight: 400;
    font-style: normal;
    src: url("@/assets/fonts/Rubik-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Rubik";
    font-weight: 500;
    font-style: normal;
    src: url("@/assets/fonts/Rubik-Medium.ttf") format("truetype");
}
</style>
