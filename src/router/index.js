import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/Login/Login.vue";
import EmployeeManagement from "../views/EmployeeManagement/EmployeeManagement.vue";
import PageNotFound from "../views/PageNotFound/PageNotFound.vue";
import AddUser from "../views/AddUser/AddUser.vue";
import EmployeeDetail from "../views/EmployeeDetail/EmployeeDetail.vue";

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
        },
        {
            path: '/create',
            name: 'create',
            component: AddUser,
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: EmployeeDetail,
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: AddUser,
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
