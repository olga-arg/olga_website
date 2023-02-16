<template></template>

<script>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  name: 'App',
  methods: {
    onSubmit() {
      let form = this.$refs.getEmailForm
      form.email_address.value = this.email
      emailjs.sendForm('service_zz4sd1l', 'template_994evbe', form, '9lz3qSqREbKpFbm1q').then(
        (result) => {
          console.log('SUCCESS!', result.text)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
      form.email_address.value = ''
    },
  },
}
const count = ref(0)
</script>
