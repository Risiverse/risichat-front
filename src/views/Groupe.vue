<template>
    <div class="sticky backdrop-blur responsive-container bg-white/30 top-0 bg flex py-5 w-full justify-between items-center">
        <RouterLink to="/"><ArrowNarrowLeftIcon class="w-5 h-5 text-primary ml-0" /></RouterLink>
        <h1 class="font-title font-bold text-2xl">{{ groupe.name }}</h1>
        <img :src="groupe.iconUrl" class="h-7 w-7 rounded-full object-cover" alt="Groupe image">
    </div>

    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>
    <div class="w-full responsive-container text-2xl">Hello</div>

    <div class="responsive-container bg-white sticky bottom-0 py-5 flex justify-between items-center">
        <input type="text" class="border-primary border-2 rounded w-4/5">
        <PaperAirplaneIcon class="w-7 h-7 text-primary rotate-45 w-1/12" />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {useGroupesStore} from "@/stores/groupes";
import {ArrowNarrowLeftIcon, PaperAirplaneIcon} from  '@heroicons/vue/solid';
import {useSettingsStore} from "@/stores/settings";

const groupesStore = useGroupesStore()
const settingsStore = useSettingsStore()
const route = useRoute()

const groupe = groupesStore.getGroupeById(route.params.id)
</script>

<style scoped>

</style>