<template>
  <nav class="bg-pink border-gray-200 px-2 sm:px-4 py-8">
    <div class="container flex items-center justify-between mx-auto z-[1] relative">
      <div className="flex ml-auto sm:ml-0">
        <a href="/" class="flex items-center pr-20"> </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0">
            <li>
              <router-link to="/como-funciona" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">Cómo funciona</router-link>
            </li>
            <li>
              <router-link to="/por-que" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">¿Por qué?</router-link>
            </li>
            <li>
              <router-link to="/precios" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">Precios</router-link>
            </li>
            <li>
              <router-link to="/contacto" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2 items-center">
        <router-link to="/contacto" class="text-white bg-blue font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-0 h-8 flex items-center whitespace-nowrap">
          Solicitar&nbsp;&nbsp;Demo
        </router-link>
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div className="h-screen flex flex-col">
    <div className="bg-pink h-4/6 w-screen flex flex-col items-center">
      <p className="py-20 text-4xl font-bold text-white">Somos tu cómodo control financiero</p>
      <div className="grid grid-cols-5 w-1/2 py-20 justify-items-center">
        <div className="flex flex-col items-center text-center text-white">
          <p className="text-8xl font-bold">1</p>
          <p className="font-medium text-lg whitespace-nowrap py-4">Registrate y añade fondos</p>
          <p className="text-sm font-regular">Una vez verificada tu empresa, añade fondos a tu cuenta en Rendilo desde tu cuenta de empresa.</p>
        </div>
        <img src="../assets/arrow.svg" alt="->" />
        <div className="flex flex-col items-center text-center text-white">
          <p className="text-8xl font-bold">2</p>
          <p className="font-medium text-lg whitespace-nowrap py-4">Define tus propias reglas de gasto</p>
          <p className="text-sm font-regular">Personaliza las políticas de gasto, los flujos de aprobación y los límites de tarjeta para cada equipo de trabajo.</p>
        </div>
        <img src="../assets/arrow.svg" alt="->" />
        <div className="flex flex-col items-center text-center text-white">
          <p className="text-8xl font-bold">3</p>
          <p className="font-medium text-lg whitespace-nowrap py-4">Invita a tu equipo</p>
          <p className="text-sm font-regular whitespace-nowrap">
            Con la aplicación de Rendilo, los <br />empleados pueden solicitar<br />
            fondos, pagar de manera segura<br />
            y presentar recibos de forma <br />fácil y rápida.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-blue flex flex-col">
      <div className="self-center pt-20 text-4xl font-bold text-white">Toma el control de los gastos de tu empresa</div>
      <div className="self-center pt-20 flex">
        <button v-if="this.currentSlide === 0" @click="handleSlideTo(0)" className="text-md font-semibold px-5 text-pink">Control</button>
        <button v-else @click="handleSlideTo(0)" className="text-md font-semibold px-5 text-white">Control</button>
        <button v-if="this.currentSlide === 1" @click="handleSlideTo(1)" className="text-md font-regular px-5 text-pink">Pagos</button>
        <button v-else @click="handleSlideTo(1)" className="text-md font-regular px-5 text-white">Pagos</button>
        <button v-if="this.currentSlide === 2" @click="handleSlideTo(2)" className="text-md font-regular px-5 text-pink">Rastreo</button>
        <button v-else @click="handleSlideTo(2)" className="text-md font-regular px-5 text-white">Rastreo</button>
        <button v-if="this.currentSlide === 3" @click="handleSlideTo(3)" className="text-md font-regular px-5 text-pink">Recolección</button>
        <button v-else @click="handleSlideTo(3)" className="text-md font-regular px-5 text-white">Recolección</button>
        <button v-if="this.currentSlide === 4" @click="handleSlideTo(4)" className="text-md font-regular px-5 text-pink">Contabilizar</button>
        <button v-else @click="handleSlideTo(4)" className="text-md font-regular px-5 text-white">Contabilizar</button>
        <button v-if="this.currentSlide === 5" @click="handleSlideTo(5)" className="text-md font-regular px-5 text-pink">Exportar</button>
        <button v-else @click="handleSlideTo(5)" className="text-md font-regular px-5 text-white">Exportar</button>
      </div>
    </div>
    <div className="bg-blue flex justify-center">
      <div className="w-1/2 flex self-center my-10">
        <swiper :slides-per-view="1" @swiper="onSwiper">
          <swiper-slide v-for="swip in swiperTextBase" @swiper="onSwiper">
            <div className="flex justify-center bg-blue">
              <img :src="swip.image" alt="image" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { ref } from 'vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      currentSlide: 0,
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
    },

    handleSlideTo(n) {
      this.swiper.slideTo(n)
      this.currentSlide = n
    },
  },
  setup() {
    const swiperTextBase = ref([
      {
        image: '/control.png',
      },
      {
        image: '/pagos.png',
      },
      {
        image: '/rastreo.png',
      },
      {
        image: '/recoleccion.png',
      },
      {
        image: '/contabilizar.png',
      },
      {
        image: '/exportar.png',
      },
    ])
    return { modules: [Autoplay, Pagination], swiperTextBase }
  },
}
const count = ref(0)
</script>
