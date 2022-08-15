import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/Login.vue";
import EmployeeManagement from "../views/EmployeeManagement/EmployeeManagement.vue";

const token = localStorage.getItem('accessToken') || null;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if (token) {
                    next('/home');
                } else {
                    next();
                }
            }
        },
        {
            path: '/home',
            name: 'home',
            component: EmployeeManagement,
            beforeEnter: (to, from, next) => {
                if (token) {
                    next();
                } else {
                    next('/login');
                }
            }
        }
    ]
})

export default router
