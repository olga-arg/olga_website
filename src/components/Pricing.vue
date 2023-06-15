<template>
  <PricesAlert v-show="showPricing" @click="showPricingAlert" />

  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-8">
    <div class="container flex items-center justify-between mx-auto z-[1] relative">
      <div className="flex ml-auto sm:ml-0">
        <a href="/" class="flex items-center pr-20">
          <img src="../assets/olgalogo_pink.svg" class="h-12 mr-3" alt="Olga Logo" />
        </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0">
            <li>
              <router-link to="/como-funciona" class="block py-2 pl-3 pr-4 text-blue rounded md:p-0 hover:text-gray_hover">Cómo funciona</router-link>
            </li>
            <li>
              <router-link to="/por-que" class="block py-2 pl-3 pr-4 text-blue rounded md:p-0 hover:text-gray_hover">¿Por qué?</router-link>
            </li>
            <li>
              <router-link to="/precios" class="block py-2 pl-3 pr-4 text-blue rounded md:p-0 hover:text-gray_hover">Precios</router-link>
            </li>
            <li>
              <router-link to="/contacto" class="block py-2 pl-3 pr-4 text-blue rounded md:p-0 hover:text-gray_hover">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2 items-center">
        <router-link to="/contacto" class="text-white bg-green font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-0 h-8 flex items-center whitespace-nowrap">
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
  <div className="bg-gray  w-screen flex">
    <div className="mx-32 mt-20 w-screen">
      <p className="font-semibold text-5xl leading-tight mb-20 text-blue">
        Tenemos el plan perfecto<br />
        para tu empresa
      </p>
      <div className="grid grid-cols-3 w-full text-blue">
        <div className="rounded-xl bg-white flex flex-col mr-5">
          <div className="flex items-center justify-between mx-10 my-10">
            <img src="../assets/free.svg" className="" alt="Free" />
            <div className="flex flex-col items-center">
              <p className="font-medium text-sm text-gray_hover">Hasta 3 Usuarios</p>
              <p className="font-light text-xs text-gray_hover"><br /></p>
            </div>
          </div>
          <div className="flex mx-10">
            <div className="font-regular text-6xl">$0</div>
            <div className="w-2"></div>
            <div className="font-regular text-xl"><br />/mes</div>
          </div>
          <div className="flex mt-16 items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">Tarjetas de empresa de Olga (físicas y virtuales)</p>
          </div>
          <div className="flex mt-2 mb-10 items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">Seguimiento en tiempo real de los gastos</p>
          </div>
        </div>
        <div className="rounded-xl bg-blue flex flex-col mr-5">
          <div className="flex items-center justify-between mx-10 my-10">
            <img src="../assets/elite.svg" className="" alt="Free" />
            <div className="flex flex-col items-center">
              <p className="font-medium text-sm text-gray_hover">Incluye 3 Usuarios</p>
              <button @click="showPricingAlert" className="font-light text-xs text-gray_hover">¿Necesitas más?</button>
            </div>
          </div>
          <div className="flex mx-10">
            <div className="font-regular text-6xl text-white">$6000</div>
            <div className="w-2"></div>
            <div className="font-regular text-xl text-white"><br />/mes</div>
          </div>
          <div className="flex mt-16 items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">0.5% Cashback (para planes anuales)</p>
          </div>
          <div className="flex mt-2 mb-10 items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">Límites de gasto por uso o compra</p>
          </div>
        </div>
        <div className="rounded-xl bg-white flex flex-col mr-5">
          <div className="flex items-center justify-between mx-10 my-10">
            <img src="../assets/pro.svg" className="" alt="Free" />
            <div className="flex flex-col items-center">
              <p className="font-medium text-sm text-gray_hover">Incluye 3 Usuarios</p>
              <button @click="showPricingAlert" className="font-light text-xs text-gray_hover">¿Necesitas más?</button>
            </div>
          </div>
          <div className="flex mx-10">
            <div className="font-regular text-6xl">$12000</div>
            <div className="w-2"></div>
            <div className="font-regular text-xl"><br />/mes</div>
          </div>
          <div className="flex mt-16 items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">Gestor de cuenta dedicado</p>
          </div>
          <div className="flex mt-2  items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">1% Cashback (para planes anuales)</p>
          </div>
          <div className="flex mt-2 mb-10 items-center mx-10">
            <img src="../assets/check_list.svg" className="mr-2" alt="Check" />
            <p className="text-gray_hover">Límites de gasto por uso o compra</p>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <p className="text-4xl my-20 font-semibold">Incluido en todos nuestros planes:</p>
        <div className="bg-white w-full h-72 mb-20 rounded-xl grid grid-cols-3 text-gray_hover  items-center">
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Tarjetas de empresa de Olga (físicas y virtuales)</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Seguimiento en tiempo real de los gastos</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Compatible con los principales sistemas contables</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Soporte por correo electrónico</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Registro de recibos digitales</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Recordatorios automáticos de recibos</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Seguimiento en tiempo real de los gastos</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Rastreador de recibos en el email</p>
          </div>
          <div className="flex">
            <img src="../assets/check_list.svg" className="mx-5" alt="Compatible" />
            <p>Apple Pay y Google Pay</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-pink h-96 flex items-center justify-center flex-col text-blue">
    <p className="font-bold text-4xl text-center mb-10">
      Pasate a un gasto<br />
      inteligente y controlado
    </p>
    <div className="flex w-72 justify-center">
      <div className="w-full h-12 bg-blue rounded-lg flex items-center justify-center">
        <a href="#contacto" className="text-pink text-center font-bold text-xl">Pedir Demo</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PricesAlert from '../components/PricesAlert.vue'
export default {
  data() {
    return {
      showPricing: false,
    }
  },
  methods: {
    showPricingAlert() {
      this.showPricing = !this.showPricing
    },
  },
  components: {
    PricesAlert,
  },
}
</script>
