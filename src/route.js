import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Contatcs from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import DetailProject from './pages/DetailProject.vue';

const router = createRouter({

    history: createWebHistory(),
    linkExactActiveClass: 'active',

    routes:[
        {
            path:"/",
            name:"home",
            component: Home
        },
        {
            path:"/contatti",
            name:"contatcs",
            component: Contatcs
        },
        {
            path:"/progetti",
            name:"Projects",
            component: Projects
        },
        {
            path:"/chi-siamo",
            name:"About",
            component: About
        },
        {
            path:"/dettaglio-progetto/:slug",
            name:"DetailProject",
            component: DetailProject
        },



        //error404 route
        {
            path: "/:pathMatch(.*)*",
            component:Error404
        }
    ]

})

export { router }