<template>
    <div class="responsive-container h-screen flex flex-col justify-center items-center">
        <h1 class="font-title text-4xl mb-16 font-bold">Login</h1>
        <div class="backdrop-blur responsive-container bg-white/60 sticky bottom-0 w-full py-5 flex justify-between items-center">
            <input v-model="inputUsername" type="text" id="username" class="border-primary border-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-primary py-1 px-2" placeholder="Enter a username...">
            <ArrowSmRightIcon @click="loginUser" class="ml-5 w-8 h-8 text-primary cursor-pointer" />
        </div>
    </div>
</template>

<script setup>
import {ArrowSmRightIcon} from '@heroicons/vue/solid';
import {useSettingsStore} from "@/stores/settings";
import {ref} from 'vue';
import {useRouter} from "vue-router";

const settingsStore = useSettingsStore()
const inputUsername = ref('')
const router = useRouter()

function loginUser() {
    settingsStore.username = inputUsername.value
    router. push({name: 'Home'})
}
</script>

<style scoped>

</style>