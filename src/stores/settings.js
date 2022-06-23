import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            username: String,
            darkMode: Boolean
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
        },

        toggleDarkMode(bool) {
            if (bool) {
                this.darkMode = true
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
            } else {
                this.darkMode = false
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
            }
        }
    }
})