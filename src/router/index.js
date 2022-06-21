import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'views.login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/forgotkey',
        name: 'views.forgotkey',
        component: () => import("../views/ForgotKey.vue")
    },
    {
        path: '/home',
        name: 'views.home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/detail',
        name: 'views.detail',
        component: () => import("../views/Detail.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;