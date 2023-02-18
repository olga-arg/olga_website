import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HowItWork from '../components/HowItWork.vue'
import Why from '../components/Why.vue'
import Pricing from '../components/Pricing.vue'
import Contact from '../components/Contact.vue'
import PageNotFound from '../components/PageNotFound.vue'
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    { path: '/', component: Home, hash: '' },
    { path: '/como-funciona', component: HowItWork, hash: 'como-funciona' },
    { path: '/por-que', component: Why, hash: 'por-que' },
    { path: '/precios', component: Pricing, hash: 'precios' },
    { path: '/contacto', component: Contact, hash: 'contacto' },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
  ],
})

export default router
