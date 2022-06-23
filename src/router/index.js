import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/groupe/:id/:name', name: 'Groupe', component: ()=>import('@/views/Groupe.vue')},
    {path: '/settings', name: 'Settings', component: ()=>import('@/views/Settings.vue')},
    {path: '/login', name: 'Login', component: ()=>import('@/views/Login.vue')},
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