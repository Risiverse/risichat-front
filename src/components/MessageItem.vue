<template>
    <div class="flex items-center mb-4" :class="{'justify-end ml-[15%]': isAuthor, 'mr-[15%]': !isAuthor, 'mb-[2px]': isChained}">
        <img v-if="!isAuthor" src="https://i1.sndcdn.com/avatars-000239937625-wn66b5-t200x200.jpg" class="h-6 w-6 self-end rounded-full object-cover" :class="{'invisible': isChained}" alt="User image">
        <p v-if="showDate && isAuthor" class="text-xs ml-2 self-end">{{ timeMessage }}</p>
        <div @click="showDate = !showDate" class="p-2 ml-2 flex flex-col" :class="radiusClass">
            <p v-if="!isAuthor && isFirstChained" class="text-sm text-primary font-bold">{{ message.username }}</p>
            <p>{{ unescapedMessage }}</p>
        </div>
        <p v-if="showDate && !isAuthor" class="text-xs ml-2 self-end">{{ timeMessage }}</p>
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

const showDate = ref(false)

const radiusClass= computed(() => {
    const classes = []
    if (isAuthor.value) {
        classes.push('bg-primary text-white')
    } else {
        classes.push('bg-gray-200')
    }

    if (isAuthor.value && isFirstChained.value && isChained.value) {
        classes.push('rounded-tr-lg rounded-tl-lg rounded-bl-lg')
    } else if (!isAuthor.value && isFirstChained.value && isChained.value) {
        classes.push('rounded-tl-lg rounded-tr-lg rounded-br-lg')
    } else if (isAuthor.value && !isFirstChained.value && isChained.value) {
        classes.push('rounded-tl-lg rounded-bl-lg')
    } else if (!isAuthor.value && !isFirstChained.value && isChained.value) {
        classes.push('rounded-tr-lg rounded-br-lg')
    } else if (isAuthor.value && !isFirstChained.value && !isChained.value) {
        classes.push('rounded-tl-lg rounded-bl-lg rounded-br-lg')
    } else if (!isAuthor.value && !isFirstChained.value && !isChained.value) {
        classes.push('rounded-tr-lg rounded-bl-lg rounded-br-lg')
    } else {
        classes.push('rounded-lg')
    }

    return classes.join(' ')
})

const unescapedMessage = computed(() => {
    return props.message.content
        .replaceAll('&amp;', '&')
        .replaceAll('&lt;', '<')
        .replaceAll('&gt;', '>')
        .replaceAll('&quot;', '"')
        .replaceAll("&#039;", '\'')
})

const isChained = computed(() => {
    return groupesStore.getNextMessageUsername(props.index, props.groupeId) === props.message.username;
})

const isFirstChained = computed(() => {
    return groupesStore.getPreviousMessageUsername(props.index, props.groupeId) !== props.message.username;
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
