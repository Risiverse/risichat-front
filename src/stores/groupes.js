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
        }
    }
})