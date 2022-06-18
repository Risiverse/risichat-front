<template>
    <div class="flex flex-col min-h-screen">
        <div class="sticky backdrop-blur responsive-container bg-white/60 top-0 bg flex shadow py-3 w-full justify-between items-center">
            <RouterLink to="/"><ArrowNarrowLeftIcon class="w-5 h-5 text-primary ml-0" /></RouterLink>
            <div class="text-center">
                <h1 class="font-title font-bold text-xl">{{ groupe.name }}</h1>
                <h2 class="text-sm -mt-1">{{ groupe.description }}</h2>
            </div>
            <img :src="groupe.iconUrl" class="h-9 w-9 rounded-full object-cover" alt="Groupe image">
        </div>

        <div class="mt-auto responsive-container w-full" ref="messagesContainer">
            <div v-for="message in groupe.messages" class="bg-grey-bg p-2 rounded-lg my-4">
                <p>{{ message.data.content }}</p>
            </div>
        </div>

        <div class="backdrop-blur responsive-container bg-white/60 sticky bottom-0 w-full py-5 flex justify-between items-center">
            <input type="text" contenteditable class="border-primary border-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-primary py-1 px-2" placeholder="Say something...">
            <PaperAirplaneIcon @click="addMessage" class="w-7 h-7 text-primary rotate-45 w-1/12 ml-5 -mt-1 cursor-pointer" />
        </div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {ref, onMounted, nextTick, watch} from "vue";
import {useGroupesStore} from "@/stores/groupes";
import {ArrowNarrowLeftIcon, PaperAirplaneIcon} from  '@heroicons/vue/solid';
import {useSettingsStore} from "@/stores/settings";

const groupesStore = useGroupesStore()
const settingsStore = useSettingsStore()
const route = useRoute()
const messagesContainer = ref(null)
let maxScroll = ref(0)
const groupe = groupesStore.getGroupeById(route.params.id)

function addMessage() {
    groupe.messages.push({
        userSSOID: 7598027543298,
        type: 'chatMessage',
        data: {
            timestamp: 7809378532907,
            username: 'Elliot',
            content: 'Test nouveau message'
        }
    })
}



async function scrollToBottom () {
    await nextTick()
    window.scrollTo(0, messagesContainer.value.scrollHeight)
    maxScroll.value = window.scrollY
}

onMounted(async () => {
    await scrollToBottom()
})

watch(groupe.messages, async () => {
    if (window.scrollY >= maxScroll.value) {
        await scrollToBottom()
    }
})
</script>

<style scoped>

</style>