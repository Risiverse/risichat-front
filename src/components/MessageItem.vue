<template>
    <div class="flex items-center my-4" :class="isAuthor ? 'justify-end ml-[15%]' : 'mr-[15%]'">
        <img v-if="!isAuthor" src="https://i1.sndcdn.com/avatars-000239937625-wn66b5-t200x200.jpg" class="h-6 w-6 self-end rounded-full object-cover" alt="Groupe image">
        <div class="p-2 rounded-lg ml-2 flex flex-col" :class="isAuthor ? 'bg-primary text-white' : 'bg-gray-200'">
            <p v-if="!isAuthor" class="text-sm text-primary font-bold">{{ message.username }}</p>
            <p>{{ message.content }}</p>
            <p class="text-xs ml-auto mt-1">{{ timeMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import {useSettingsStore} from "@/stores/settings";

const settingsStore = useSettingsStore()
const props = defineProps({
    message: Object
})

const isAuthor = computed(() => {
    return props.message.username === settingsStore.username
})

const timeMessage = computed(() => {
    return new Date(props.message.timestamp).toLocaleString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    })
})

</script>

<style scoped>

</style>
