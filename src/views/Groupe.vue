<template>
    <div class="flex py-10 w-full justify-between items-center">
        <ArrowNarrowLeftIcon class="w-5 h-5 text-primary ml-0" />
        <h1 class="font-title font-bold text-2xl">{{ groupe.name }}</h1>
        <img :src="groupe.iconUrl" class="h-7 w-7 rounded-full object-cover" alt="Groupe image">
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {useGroupesStore} from "@/stores/groupes";
import {ArrowNarrowLeftIcon} from  '@heroicons/vue/solid';

const groupesStore = useGroupesStore()
const route = useRoute()

const groupe = groupesStore.getGroupeById(route.params.id)
</script>

<style scoped>

</style>