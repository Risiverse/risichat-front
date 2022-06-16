<template>
    <router-link :to="{ name: `Groupe`, params: {id: groupeId, name: groupe.name.toLowerCase()} }" class="flex items-center">
        <img :src="groupe.iconUrl" class="h-12 w-12 rounded-full object-cover" alt="Groupe image">
        <div class="mx-5">
            <h2 class="font-title text-lg font-bold">{{ groupe.name }}</h2>
            <h2 class="text-sm -mt-1">{{ groupe.description }}</h2>
        </div>
        <ArrowNarrowRightIcon class="h-5 w-5 ml-auto text-primary"/>
    </router-link>
</template>

<script setup>
import {useGroupesStore} from "@/stores/groupes";
import {ArrowNarrowRightIcon} from '@heroicons/vue/solid';

const groupesStore = useGroupesStore()
const props = defineProps({
    groupeId: Number
})
const groupe = groupesStore.getGroupeById(props.groupeId)

</script>

<style scoped>

</style>