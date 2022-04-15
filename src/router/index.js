import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import('@/views/Index.vue'),
        // meta: {
            // layout: 'Layout',
            // requiresAuth: false
        // }
    },
    
    {
        path: "/:catchAll(.*)",
        component: () => import('../views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



