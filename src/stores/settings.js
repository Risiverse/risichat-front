import {defineStore} from "pinia";

export const useSettings = defineStore('settings', {
    state: () => {
        return {
            username: 'Elliot'
        }
    }
})