import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faEye,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faEye,faChevronLeft)
import App from './App.vue'
import router from './router'

import './assets/main.css'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
// app.use(router)

app.mount('#app')
