import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
    {path: '/', name: 'Home', component: Home}
]

const scrollBehavior = (to, from, savedPosition) => {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
};

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior
})

export default router