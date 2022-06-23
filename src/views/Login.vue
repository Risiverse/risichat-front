<template>
    <div class="responsive-container h-screen flex flex-col justify-center items-center">
        <h1 class="font-title text-4xl mb-16 font-bold">Login</h1>
        <form @submit.prevent="onSubmit" class="sticky bottom-0 w-full py-5 flex justify-between items-center">
            <input v-model="inputUsername" type="text" id="username" class="border-primary dark:bg-gray-800 border-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-primary py-1 px-2" placeholder="Enter a username...">
            <ArrowSmRightIcon @click="onSubmit" class="ml-5 w-8 h-8 text-primary cursor-pointer" />
        </form>
        <p v-if="errorSubmit" class="text-red-500 underline">Invalid username, please try again</p>
    </div>
</template>

<script setup>
import {ArrowSmRightIcon} from '@heroicons/vue/solid';
import {useSettingsStore} from "@/stores/settings";
import {ref} from 'vue';
import {useRouter} from "vue-router";

const settingsStore = useSettingsStore()
const inputUsername = ref('')
const errorSubmit = ref(false)
const router = useRouter()

function onSubmit() {
    settingsStore.loginUser(inputUsername.value)
        .then(() => {
            router.push({name: 'Home'})
        })
        .catch((e) => {
            console.log(e)
            inputUsername.value = ''
            errorSubmit.value = true
        })
}
</script>

<style scoped>

</style>