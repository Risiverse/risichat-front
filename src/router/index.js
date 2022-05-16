import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: ()=>import('@/views/About.vue')},
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