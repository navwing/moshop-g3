import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faAngleDown,
    faChartSimple,
    faUserGroup,
    faComment,
    faVideo,
    faUsers,
    faClipboardList,
    faArrowUpFromBracket,
    faCheck,
    faUserPlus,
    faUser,
    faBox,
    faCircleInfo,
    faTag,
    faArrowRightFromBracket,
    faGear,
    faPlus, faArrowDown, faArrowUp, faCalendar, faUserSecret, faEye, faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import 'floating-vue/dist/style.css'
import './assets/main.css'
import FloatingVue from 'floating-vue'


library.add(faAngleDown, faChartSimple, faUserGroup, faComment, faVideo, faUsers, faClipboardList,
    faArrowUpFromBracket, faCheck, faUserPlus, faUser, faBox, faCircleInfo, faTag, faArrowRightFromBracket, faGear, faPlus
    , faArrowDown, faArrowUp, faCalendar, faUserSecret, faEye, faChevronLeft)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(FloatingVue)

app.mount('#app')
