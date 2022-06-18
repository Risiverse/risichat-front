<template>
    <nav class="fixed shadow-2xl flex justify-around w-full z-10 py-5 bottom-0">
        <RouterLink to="/"><CogIcon class="text-gray-300 h-7 w-7" /></RouterLink>
        <RouterLink to="/"><ChatAlt2Icon class="text-primary h-7 w-7" /></RouterLink>
        <LogoutIcon @click="logout" class="text-gray-300 h-7 w-7" />
    </nav>
</template>

<script setup>
import {ChatAlt2Icon, CogIcon} from '@heroicons/vue/solid'
import {LogoutIcon} from '@heroicons/vue/outline'
import {useSettingsStore} from "@/stores/settings";
import {useRouter} from "vue-router";

const settingsStore = useSettingsStore()
const router = useRouter()

function logout() {
    localStorage.removeItem('username')
    settingsStore.username = ''
    router.push({name: 'Login'})
}
</script>


<style scoped>

</style>