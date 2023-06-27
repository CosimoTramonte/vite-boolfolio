import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Contatcs from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue'

const router = createRouter({

    history: createWebHistory(),

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



        //error404 route
        {
            path: "/:pathMatch(.*)*",
            component:Error404
        }
    ]

})

export { router }