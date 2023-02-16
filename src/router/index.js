import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HowItWork from '../components/HowItWork.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/como-funciona',
      name: 'HowItWork',
      component: HowItWork,
    },
  ],
})

export default router
