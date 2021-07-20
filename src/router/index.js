import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NYT from "../views/NYT.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        props: { msg: "Bootstrap Modal" },
    },
    {
        path: "/nyt",
        name: "NYT",
        component: NYT,
        meta: { layout: "MainLayout" },
    },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;
