import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            username: ''
        }
    },

    actions: {
        async loginUser(username) {
            if (typeof username === "string") {
                this.username = username
                localStorage.setItem('username', username);
            } else {
                throw new Error('Invalid username');
            }
        }
    }
})