import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'My Projects',
            component: () => import('../views/ProjectsView.vue')
        },
        {
            path: '/contact',
            name: 'Get In Touch',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/cv',
            name: 'CV',
            component: () => import('../views/CVView.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'Page not Found',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

export default router
