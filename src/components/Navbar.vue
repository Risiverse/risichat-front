<template>
    <nav class="responsive-container fixed shadow-2xl flex justify-around w-full z-10 py-5 bottom-0 dark:bg-gray-900">
        <RouterLink to="/settings"><CogIcon class="h-7 w-7" :class="route.name === 'Settings' ? 'text-primary dark:text-primary': 'text-gray-300 dark:text-gray-400'" /></RouterLink>
        <RouterLink to="/"><ChatAlt2Icon class="h-7 w-7" :class="route.name === 'Home' ? 'text-primary dark:text-primary': 'text-gray-300 dark:text-gray-400'"/></RouterLink>
        <LogoutIcon @click="logout" class="text-gray-300 dark:text-gray-400 h-7 w-7 cursor-pointer" />
    </nav>
</template>

<script setup>
import {ChatAlt2Icon, CogIcon} from '@heroicons/vue/solid'
import {LogoutIcon} from '@heroicons/vue/outline'
import {useSettingsStore} from "@/stores/settings";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";

const settingsStore = useSettingsStore()
const router = useRouter()
const route = useRoute()

function logout() {
    localStorage.removeItem('username')
    settingsStore.username = ''
    router.push({name: 'Login'})
}
</script>


<style scoped>

</style>