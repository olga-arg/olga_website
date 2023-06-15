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
                <label for="name" className="leading-7 text-sm text-blue"> Nombre </label>
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
                <label className="leading-7 text-sm text-blue"> Apellido </label>
                <input
                  v-model="surname"
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
                <label for="company_email" className="leading-7 text-sm text-blue"> Email de Empresa </label>
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
                <label for="phone" className="leading-7 text-sm text-blue"> Número de Telefono </label>
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
                <label for="company_name" className="leading-7 text-sm text-blue"> Nombre de la Empresa </label>
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
              <label for="company_size" className="leading-7 text-sm text-blue">Tamaño de Empresa (empleados)</label>
              <AppDropdown>
                <template slot="toggler">
                  <button class="relative flex items-center focus:outline-none pl-5 pr-3 py-2 rounded-lg bg-gray-300 text-gray-800 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current text-gray-700">
                      <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
                    </svg>
                  </button>
                </template>
                <AppDropdownContent>
                  <AppDropdownItem @click="choose('1-10')">1-10</AppDropdownItem>
                  <AppDropdownItem @click="choose('11-50')">11-50</AppDropdownItem>
                  <AppDropdownItem @click="choose('51-200')">51-200</AppDropdownItem>
                  <AppDropdownItem @click="choose('201-600')">201-600</AppDropdownItem>
                  <AppDropdownItem @click="choose('+600')">+600</AppDropdownItem>
                </AppDropdownContent>
                <input
                  v-model="selectedOption"
                  required=""
                  type="text"
                  id="company_size"
                  name="company_size"
                  className="w-full rounded border border-gray_hover text-base outline-none text-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </AppDropdown>
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
import emailjs from '@emailjs/browser'
import AppDropdown from './AppDropdown.vue'
import AppDropdownContent from './AppDropdownContent.vue'
import AppDropdownItem from './AppDropdownItem.vue'

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
      emailjs.sendForm('service_ui207oi', 'template_007w7tl', form, '9lz3qSqREbKpFbm1q').then(
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
  components: {
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
  },
  data() {
    return {
      errors: [],
      selectedOption: 'Seleccionar',
    }
  },
}
</script>
