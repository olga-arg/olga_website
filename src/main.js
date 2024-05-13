import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

const app = createApp(App)
app.use(router)
app.use(VueGtag, {
  config: { id: 'G-82LXZ5CFQD' },
})
app.mount('#app')
