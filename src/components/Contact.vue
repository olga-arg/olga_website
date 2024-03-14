<template>
  <div class="h-screen w-full overflow-hidden bg-fixed px-8 py-4" style="background-color: rgba(237, 225, 216)">
    <div class="flex">
      <div class="flex items-center text-[#142C1D]">
        <div class="flex flex-col">
          <h2 class="text-7xl sm:text-[217px] font-seriguela font-bold">(PEDI TU DEMO)</h2>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 font-seriguela">
      <a class="absolute text-7xl bottom-0 font-medium pb-7"
        >CONOCE COMO CONTROLAR GASTOS <br />
        SIN ESFUERZO Y AUMENTA LA <br />
        EFICIENCIA EN TU EMPRESA.</a
      >
      <div></div>
      <div class="flex flex-col pt-10 gap-4">
        <div class="flex flex-col">
          <a>(QUIEN SOS?)</a>
          <input v-model="name" class="text-[#BCB5AD] placeholder-[#BCB5AD] text-8xl bg-[#EDE1D8] focus:outline-none" type="text" placeholder="NOMBRE Y APELLIDO" />
          <div class="h-0.5 w-full bg-[#142C1D]"></div>
        </div>
        <div class="flex flex-col">
          <a>(COMO TE LLAMO?)</a>
          <input v-model="phone" class="text-[#BCB5AD] placeholder-[#BCB5AD] text-8xl bg-[#EDE1D8] focus:outline-none" type="number" placeholder="CELULAR" />
          <div class="h-0.5 w-full bg-[#142C1D]"></div>
        </div>
        <div class="flex flex-col">
          <a>(COMO TE CONTACTO?)</a>
          <input v-model="company_email" class="text-[#BCB5AD] placeholder-[#BCB5AD] text-8xl bg-[#EDE1D8] focus:outline-none" type="mail" placeholder="EMAIL DE EMPRESA" />
          <div class="h-0.5 w-full bg-[#142C1D]"></div>
        </div>
        <a v-on:click="onSubmit" class="transition hover:underline cursor-pointer absolute bottom-0 right-0 pr-8 pb-8 text-end text-8xl">SOLICITAR</a>
      </div>
    </div>
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
    onSubmit() {
      console.log('name: ', this.name, 'phone: ', this.phone, 'email: ', this.company_email)
      if (this.name === '' || this.phone === '' || this.company_email == '') {
        this.errors.push('Complete todos los campos')
        console.log('Complete todos los campos')
        return
      } else {
        this.errors = []
      }
      var templateParams = {
        name: this.name,
        phone: this.phone,
        company_email: this.company_email,
      }

      emailjs.send('service_zz4sd1l', 'template_007w7tl', templateParams, '9lz3qSqREbKpFbm1q').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )
      this.name = ''
      this.phone = ''
      this.company_email = ''
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
      name: '',
      phone: '',
      company_email: '',
    }
  },
}
</script>
