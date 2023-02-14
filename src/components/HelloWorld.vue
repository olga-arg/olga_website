<script setup>
import { ref } from 'vue'
import { Collapse } from 'flowbite'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <nav class="bg-[#061021] border-gray-200 px-2 sm:px-4 py-8">
    <div class="container flex items-center justify-between mx-auto z-[1] relative">
      <div className="flex ml-auto sm:ml-0">
        <a href="/" class="flex items-center pr-20">
          <img src="../assets/olgalogo.svg" class="h-12 mr-3" alt="Flowbite Logo" />
        </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Cómo funciona</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >¿Por qué?</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Nosotros</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Contacto</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2 items-center">
        <button type="button" class="text-white font-medium rounded-lg text-sm sm:px-10 px-2 py-2.5 text-center mr-3 md:mr-0">Login</button>
        <button type="button" class="text-[#1C2E3D] bg-[#62948F] font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-0 h-8 flex items-center whitespace-nowrap">
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

  <div className="flex">
    <div className="bg-[#061021] h-screen sm:w-1/2 w-screen absolute sm:top-0 sm:left-0 flex flex-col sm:justify-center p-6 sm:p-24">
      <p className="py-5 text-white font-medium text-6xl">Yo manejo personas, no gastos.</p>
      <p className="py-5 text-white font-light text-xl">
        Alivia las tareas administrativas y obtén una visibilidad completa de los gastos de tu empresa. Con Olga, puedes automatizar y simplificar la gestión de gastos en solo 5
        minutos.
        <br />
        Comenzá con tu prueba gratuita.
      </p>
      <form className="mt-5">
        <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
          <div class="relative w-full mr-3 formkit-field">
            <label for="member_email" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              className="bg-[#061021] border border-gray-300 text-white text-sm rounded-lg block w-full pl-10 p-2.5"
              name="email_address"
              aria-label="Email Address"
              placeholder="Tu email de empresa"
              required=""
              type="email"
              data-form-type="email"
            />
          </div>
          <button data-element="submit" class="formkit-submit" data-form-type="action,subscribe">
            <span class="px-5 py-3 text-sm font-medium text-center text-white bg-[#62948F] rounded-lg cursor-pointer">Subscribe</span>
          </button>
        </div>
      </form>
      <div className="flex items-center mt-10">
        <img className="w-12 h-12 mr-4" src="../assets/playvideo.svg" />
        <p className="text-white font-light text-sm">Cómo funciona Olga</p>
      </div>
    </div>
    <div className="bg-[#061021] sm:w-1/2 sm:absolute sm:top-0 sm:right-0">
      <div className="sm:flex sm:justify-center sm:h-screen sm:relative">
        <img className="w-full h-full sm:object-cover sm:absolute" src="../assets/background.svg" />
        <img className="w-5/6 h-full sm:absolute" src="../assets/cards.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
