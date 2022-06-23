<template>
    <div class="responsive-container">
        <h1 class="text-black text-4xl font-title font-bold py-20 text-center dark:text-white">Settings</h1>

        <div class="flex w-full justify-between">
            <p>Dark mode</p>
            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input @click="settingsStore.toggleDarkMode(!settingsStore.darkMode)" type="checkbox" value="" id="default-toggle" class="sr-only peer" ref="darkModeToggle">
                <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    </div>
</template>

<script setup>
import {useSettingsStore} from "@/stores/settings";
import {onMounted, ref} from "vue";

const settingsStore = useSettingsStore()
const darkModeToggle = ref(null)

onMounted(() => {
    darkModeToggle.value.checked = !!settingsStore.darkMode;
})
</script>

<style scoped>

</style>