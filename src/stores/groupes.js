import { defineStore } from 'pinia'

export const useGroupesStore = defineStore('groupes', {
    state: () => {
        return {
            groupes: [
                {
                    name: 'Global',
                    description: 'Le canal général de risichat',
                    id: 1,
                    iconUrl: 'https://i.imgur.com/mtPxQs5.jpeg',
                    messages: []
                }
            ]
        }
    },

    actions: {
        getGroupeById(id) {
            return this.groupes.find((element) => element.id === parseInt(id))
        },

        removeOldestNotConfirmed(id) {
            const groupIndex = this.groupes.findIndex((element) => element.id === parseInt(id))
            const oldestNotConfirmedIndex = groupes[groupIndex].messages.findIndex(message => message.confirmed === false)[0]
            groupes[groupIndex].messages.splice(oldestNotConfirmedIndex, 1)
        }
    }
})