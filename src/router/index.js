import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView'
import ToolsView from '../views/ToolsView'
import ContactView from '../views/ContactView'
import NotFoundView from '../views/NotFoundView'

const routes = [
    {
        path: '/',
        name: "Home",
        component: HomeView
    },
    {
        path: '/my-projects',
        name: "My Projects",
        component: ProjectsView
    },
    {
        path: '/tools',
        name: "Tools",
        component: ToolsView
    },
    {
        path: '/get-in-touch',
        name: "Get In Touch",
        component: ContactView
    }, {
        path: "/catchALL(.*)",
        name: "Page Not Found",
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
