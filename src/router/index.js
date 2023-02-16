import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HowItWork from '../components/HowItWork.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    { path: '/', component: Home, hash: '' },
    { path: '/como-funciona', component: HowItWork, hash: 'como-funciona' },
  ],
})

export default router
