import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import friendsNavigation from 'components/friendsNavigation.vue';
// import friendsNavigation from './frinds/components/friendsNavigation.vue'


import App from './App.vue'
import router from './router'

// 引入适配的CSS
import '@/assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// app.component('friendsNavigation', friendsNavigation)
