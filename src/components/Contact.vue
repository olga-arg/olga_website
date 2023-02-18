<template>
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
        <button type="button" class="text-black font-light rounded-lg text-sm sm:px-10 px-2 py-2.5 text-center mr-3 md:mr-0">Login</button>
        <button type="button" class="text-white bg-green font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-0 h-8 flex items-center whitespace-nowrap">
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
  <div className="grid grid-cols-2">
    <div className="flex flex-col justify-center mx-32">
      <p className="font-bold text-4xl mb-10">Reserva tu demo de Olga</p>
      <p className="font-light text-2xl mb-10">
        Controla los gastos y aumenta la eficiencia en toda tu empresa con tarjetas de débito inteligentes, una gestión de gastos sin esfuerzo y contabilidad automatizada.
      </p>
      <div class="flex mb-10 items-center">
        <img src="../assets/clock.svg" class="mr-5" />
        <p className="font-light text-xl">Gastos en tiempo real</p>
      </div>
      <div class="flex mb-10 items-center">
        <img src="../assets/card.svg" class="mr-5" />
        <p className="font-light text-xl ">Tarjetas inteligentes</p>
      </div>
      <div class="flex items-center">
        <img src="../assets/star.svg" class="mr-5" />
        <p className="font-light text-xl ">Contabilidad automatizada</p>
      </div>
    </div>
    <form v-on:submit.prevent="onSubmit" ref="getEmailForm" className="mt-5">
      <div className="flex h-screen items-center mx-auto">
        <div className="w-2/3 mx-auto">
          <div className="flex flex-wrap">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-blue"> Name * </label>
                <input
                  v-model="name"
                  required=""
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray_hover text-base outline-none text-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-blue"> Apellido * </label>
                <input
                  required=""
                  type="text"
                  id="surname"
                  name="surname"
                  className="w-full rounded border border-gray_hover text-base outline-none text-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="company_email" className="leading-7 text-sm text-blue"> Email de Empresa * </label>
                <input
                  v-model="company_email"
                  required=""
                  type="email"
                  id="company_email"
                  name="company_email"
                  className="w-full rounded border border-gray_hover text-base outline-none text-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="phone" className="leading-7 text-sm text-blue"> Numero de Telefono * </label>
                <input
                  v-model="phone"
                  required=""
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full rounded border border-gray_hover text-base outline-none text-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="company_name" className="leading-7 text-sm text-blue"> Nombre de la Empresa * </label>
                <input
                  v-model="company_name"
                  required=""
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="w-full rounded border border-gray_hover text-base outline-none text-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="company_size" className="leading-7 text-sm text-blue"> Tamaño en la Empresa * </label>
                <button
                  data-dropdown-toggle="dropdown"
                  class="inline-flex items-center justify-between w-full rounded border text-base outline-none text-gray_hover py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="button"
                >
                  <input id="company_size" name="company_size" v-model="selectedOption" className="hidden" />
                  {{ selectedOption }}
                  <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-blue">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a @click="choose('1-10')" class="w-full block px-4 py-2 hover:bg-gray">1-10</a>
                    </li>
                    <li>
                      <a @click="choose('11-50')" class="w-full block px-4 py-2 hover:bg-gray">11-50</a>
                    </li>
                    <li>
                      <a @click="choose('51-200')" class="w-full block px-4 py-2 hover:bg-gray">51-200</a>
                    </li>
                    <li>
                      <a @click="choose('201-600')" class="w-full block px-4 py-2 hover:bg-gray">201-600</a>
                    </li>
                    <li>
                      <a @click="choose('600+')" class="w-full block px-4 py-2 hover:bg-gray">600+</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-if="errors.length">
              <ul>
                <li className="text-error" v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <div className="p-2 w-full">
              <button className="w-full text-white bg-pink border-0 py-2 px-8 rounded text-lg">Contactenme</button>
            </div>
            <div className="p-2 w-full text-center">
              <a className="text-xs text-pink">No se requiere tarjeta de crédito. No es necesario instalar ningun software.</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Dropdown } from 'flowbite'
import emailjs from '@emailjs/browser'

const $targetEl = document.getElementById('dropdownMenu')

// set the element that trigger the dropdown menu on click
const $triggerEl = document.getElementById('dropdownButton')

// options with default values
const options = {
  placement: 'bottom',
  triggerType: 'click',
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  onHide: () => {
    console.log('dropdown has been hidden')
  },
  onShow: () => {
    console.log('dropdown has been shown')
  },
  onToggle: () => {
    console.log('dropdown has been toggled')
  },
}

const dropdown = new Dropdown($targetEl, $triggerEl, options)
export default {
  name: 'ContactForm',
  methods: {
    choose(option) {
      this.selectedOption = option
    },
    onSubmit(e) {
      if (this.selectedOption === 'Seleccionar') {
        this.errors.push('Selecciona un tamaño de empresa')
        e.preventDefault()
        return
      } else {
        this.errors = []
      }
      let form = this.$refs.getEmailForm

      emailjs.sendForm('service_zz4sd1l', 'template_007w7tl', form, '9lz3qSqREbKpFbm1q').then(
        (result) => {
          console.log('SUCCESS!', result.text)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
      this.name = ''
      this.surname = ''
      this.phone = ''
      this.company_name = ''
      this.company_email = ''
      this.selectedOption = 'Seleccionar'
    },
  },
  components: {},
  data() {
    return {
      errors: [],
      selectedOption: 'Seleccionar',
    }
  },
}
</script>
