<template>
    <div class="flex items-center mb-4" :class="{'justify-end ml-[15%]': isAuthor, 'mr-[15%]': !isAuthor}">
        <img v-if="!isAuthor" src="https://i1.sndcdn.com/avatars-000239937625-wn66b5-t200x200.jpg" class="h-6 w-6 self-end rounded-full object-cover" alt="Groupe image">
        <div class="p-2 rounded-lg ml-2 flex flex-col" :class="isAuthor ? 'bg-primary text-white' : 'bg-gray-200'">
            <p v-if="!isAuthor" class="text-sm text-primary font-bold">{{ message.username }}</p>
            <p>{{ message.content }}</p>
            <p class="text-xs ml-auto mt-1">{{ timeMessage }}</p>
            <p class="text-xs ml-auto mt-1 underline">prev : {{ prevMessage }}</p>
            <p class="text-xs ml-auto mt-1 underline">next : {{ nextMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useSettingsStore} from "@/stores/settings";
import {useGroupesStore} from "@/stores/groupes";

const settingsStore = useSettingsStore()
const groupesStore = useGroupesStore()
const props = defineProps({
    message: Object,
    index: Number,
    groupeId: String
})

const groupe = groupesStore.getGroupeById(props.groupeId)
let prevMessage = ref(groupesStore.getPreviousMessageUsername(props.index, props. groupeId))
let nextMessage = ref(groupesStore.getNextMessageUsername(props.index, props. groupeId))

const isFollowUp = computed(() => {

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

watch(groupe.messages, async () => {
    prevMessage = groupesStore.getPreviousMessageUsername(props.index, props. groupeId)
    nextMessage = groupesStore.getNextMessageUsername(props.index, props. groupeId)
})

</script>

<style scoped>

</style>
