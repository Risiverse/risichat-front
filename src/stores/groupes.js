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
                    messages: [
                        {
                            userSSOID: 7598027543298,
                            type: 'chatMessage',
                            data: {
                                timestamp: 7809378532907,
                                username: 'Elliot',
                                content: 'Bonsoir à tous'
                            }
                        }

                    ]
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