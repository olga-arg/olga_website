<template>
  <nav class="bg-pink border-gray-200 px-2 sm:px-4 py-8">
    <div class="container flex items-center justify-between mx-auto z-[1] relative">
      <div className="flex ml-auto sm:ml-0">
        <a href="/" class="flex items-center pr-20">
          <img src="../assets/olgalogo_white.svg" class="h-12 mr-3" alt="Olga Logo" />
        </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0">
            <li>
              <router-link to="/como-funciona" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">Cómo funciona</router-link>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">¿Por qué?</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">Nosotros</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray_hover">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2 items-center">
        <button type="button" class="text-white font-light rounded-lg text-sm sm:px-10 px-2 py-2.5 text-center mr-3 md:mr-0">Login</button>
        <button type="button" class="text-white bg-blue font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-0 h-8 flex items-center whitespace-nowrap">
          Sign Up
        </button>
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
          <p className="text-sm font-regular">Una vez verificada tu empresa, añade fondos a tu cuenta en Olga desde tu cuenta de empresa.</p>
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
            Con la aplicación de Olga, los <br />empleados pueden solicitar<br />
            fondos, pagar de manera segura<br />
            y presentar recibos de forma <br />fácil y rápida.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-blue flex flex-col">
      <div className="self-center pt-20 text-4xl font-bold text-white">Toma el control de los gastos de tu empresa</div>
      <div className="self-center pt-20 flex">
        <div className="text-pink text-md font-semibold px-5">Control</div>
        <div className="text-md font-regular px-5 text-white">Pagos</div>
        <div className="text-md font-regular px-5 text-white">Rastreo</div>
        <div className="text-md font-regular px-5 text-white">Recolección</div>
        <div className="text-md font-regular px-5 text-white">Contabilizar</div>
        <div className="text-md font-regular px-5 text-white">Exportar</div>
      </div>
    </div>
    <div className="bg-blue flex justify-center">
      <div className="w-1/2 flex self-center my-10">
        <Swiper
          :modules="modules"
          :space-between="30"
          :loop="true"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        >
          <swiper-slide v-for="swip in swiperTextBase">
            <div className="flex justify-center bg-blue">
              <img :src="swip.image" alt="image" />
            </div>
          </swiper-slide>
        </Swiper>
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
  setup() {
    const swiperTextBase = ref([
      {
        image: '/control.svg',
      },
      {
        image: '/pagos.svg',
      },
      {
        image: '/rastreo.svg',
      },
      {
        image: '/recoleccion.svg',
      },
      {
        image: '/contabilizar.svg',
      },
      {
        image: '/exportar.svg',
      },
    ])
    return { modules: [Autoplay, Pagination], swiperTextBase }
  },
}
const count = ref(0)
</script>
