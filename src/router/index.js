import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HowItWork from '../components/HowItWork.vue'
import Why from '../components/Why.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    { path: '/', component: Home, hash: '' },
    { path: '/como-funciona', component: HowItWork, hash: 'como-funciona' },
    { path: '/por-que', component: Why, hash: 'por-que' },
  ],
})

export default router
