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
    faPlus, faArrowDown, faArrowUp
} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import './assets/main.css'

library.add(faAngleDown, faChartSimple, faUserGroup, faComment, faVideo, faUsers, faClipboardList,
    faArrowUpFromBracket, faCheck, faUserPlus, faUser, faBox, faCircleInfo, faTag, faArrowRightFromBracket, faGear, faPlus
,faArrowDown,faArrowUp)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
