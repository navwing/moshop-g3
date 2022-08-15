import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/Login.vue";
import EmployeeManagement from "../views/EmployeeManagement/EmployeeManagement.vue";
import PageNotFound from "../views/PageNotFound.vue";


const token = localStorage.getItem('accessToken') || null;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/home',
            name: 'home',
            component: EmployeeManagement,
        },
        {
            path: '/:pathMatch(.*)',
            component: PageNotFound
        }

    ]
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.getItem('accessToken')) {
        next({
            path: 'login',
            replace: true
        })
    } else if (to.name === 'login' && localStorage.getItem('accessToken')) {
        next({
            path: 'home',
            replace: true
        })
    } else {
        next();
    }
})

export default router
