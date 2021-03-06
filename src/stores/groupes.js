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

        getPreviousMessageUsername(messageIndex, groupeId) {
            const groupeIndex = this.groupes.findIndex((element) => element.id = parseInt(groupeId))

            if (messageIndex !== 0) {
                return this.groupes[groupeIndex].messages[messageIndex - 1].username
            } else {
                return ''
            }
        },

        getNextMessageUsername(messageIndex, groupeId) {
            const groupeIndex = this.groupes.findIndex((element) => element.id = parseInt(groupeId))

            if (this.groupes[groupeIndex].messages[messageIndex + 1]) {
                return this.groupes[groupeIndex].messages[messageIndex + 1].username
            } else {
                return ''
            }
        }
    }
})