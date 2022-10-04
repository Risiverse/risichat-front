<template>
    <div class="flex flex-col min-h-screen">
        <div class="sticky backdrop-blur responsive-container bg-white/60 dark:bg-gray-800/60 top-0 bg flex shadow py-3 w-full justify-between items-center">
            <RouterLink to="/"><ArrowNarrowLeftIcon class="w-5 h-5 text-primary ml-0" /></RouterLink>
            <div class="text-center">
                <h1 class="font-title font-bold text-xl">{{ groupe.name }}</h1>
                <h2 class="text-sm -mt-1">{{ groupe.description }}</h2>
            </div>
            <img :src="groupe.iconUrl" class="h-9 w-9 rounded-full object-cover" alt="Groupe image">
        </div>

        <div class="mt-auto responsive-container w-full" ref="messagesContainer">
            <MessageItem v-for="(message, index) in groupe.messages" :message="message" :index="index" :groupeId="route.params.id"/>
        </div>

        <form @submit.prevent="addMessage" class="backdrop-blur responsive-container bg-white/60 dark:bg-gray-800/60 sticky bottom-0 w-full py-5 flex justify-between items-center">
            <input v-model="userInputMessage" type="text" contenteditable class="border-primary border-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-primary py-1 px-2 dark:bg-gray-800" placeholder="Say something...">
            <PaperAirplaneIcon @click="addMessage" class="w-7 h-7 3xl:w-8 3xl:h-8 3xl:ml-10 text-primary rotate-45 w-1/12 ml-5 -mt-1 cursor-pointer" />
        </form>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {nextTick, onMounted, ref, watch} from "vue";
import {useGroupesStore} from "@/stores/groupes";
import {ArrowNarrowLeftIcon, PaperAirplaneIcon} from '@heroicons/vue/solid';
import {useSettingsStore} from "@/stores/settings";
import MessageItem from "@/components/MessageItem.vue";

const groupesStore = useGroupesStore()
const settingsStore = useSettingsStore()
const route = useRoute()

let wsServer = ref(null)
const messagesContainer = ref(null)
let maxScroll = ref(0)
const userInputMessage = ref('')
const groupe = groupesStore.getGroupeById(route.params.id)

function addMessage() {
    if (userInputMessage.value && wsServer.value.readyState === 1) {
        const message = {
            type: "newMessage",
            data: {
                userSSOID: 1000000001,
                username: settingsStore.username,
                content: userInputMessage.value
            }
        }

        wsServer.value.send(JSON.stringify(message))
        //TODO: Add temp message deleted when message is sent back by server
        // groupe.messages.push({
        //     timestamp: Date.now(),
        //     type: 'message',
        //     username: settingsStore.username,
        //     content: userInputMessage.value
        // })
        userInputMessage.value = ''
    }
}


async function scrollToBottom () {
    await nextTick()
    window.scrollTo(0, messagesContainer.value.scrollHeight)
    maxScroll.value = window.scrollY
}

onMounted(async () => {
    await scrollToBottom()

    wsServer.value = new WebSocket('wss://ws-chat.risiverse.com')

    wsServer.value.onopen = function(event) {
        groupe.messages.push({
            timestamp: Date.now(),
            type: 'info',
            content: `Welcome to the ${groupe.name} room`
        })
    }

    wsServer.value.onclose = function (event) {
        groupe.messages.push({
            timestamp: Date.now(),
            type: 'info',
            content: `Connection closed with the room`
        })
    }

    wsServer.value.onerror = function (event) {
        groupe.messages.push({
            timestamp: Date.now(),
            type: 'info',
            content: `Connection closed with the room`
        })
    }

    wsServer.value.onmessage = function(event) {
        console.log(event)
        const newMessage = JSON.parse(event.data)
        if (newMessage.type !== 'newConnection') {
            groupe.messages.push({
                timestamp: newMessage.data.timestamp,
                type: 'message',
                username: newMessage.data.username,
                content: newMessage.data.content
            })
        } else if (newMessage.type === 'newConnection') {
            groupe.messages.push({
                timestamp: Date.now(),
                type: 'info',
                content: `New user connected to the room`
            })
        }
    }

})

watch(groupe.messages, async () => {
    if (window.scrollY >= maxScroll.value) {
        await scrollToBottom()
    }
})
</script>

