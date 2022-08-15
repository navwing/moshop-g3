import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faAngleLeft, faEye, faAngleDown, faPlus, faClock, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faAngleLeft, faEye, faAngleDown, faPlus, faClock, faXmark)
import App from './App.vue'
import router from './router'

import './assets/main.css'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
