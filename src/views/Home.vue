<template>
    <h1 class="text-black text-4xl font-title font-bold py-20 text-center">Chat</h1>
    <GroupeListItem class="py-5 border-b border-b-gray-200 last:border-b-0" v-for="groupe in groupesStore.groupes" :groupeId="groupe.id" />
</template>

<script setup>
import GroupeListItem from '@/components/GroupeListItem.vue'
import {useGroupesStore} from "@/stores/groupes";

const groupesStore = useGroupesStore()
</script>


<style scoped>

</style>
