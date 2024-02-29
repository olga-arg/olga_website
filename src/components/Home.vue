<template>
  <div class="font-montserrat relative overflow-hidden bg-no-repeat text-center h-screen bg-cover bg-center" style="background-image: url('/src/assets/wom.png')">
    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style="background-color: rgba(0, 0, 0, 0.1)">
      <header class="px-5 sm:px-10 pt-7 items-center">
        <div class="flex justify-between items-center">
          <image src="/src/assets/olga_pin.png" alt="logo" class="w-24" />
          <div class="border h-max px-4 rounded-full text-white flex py-1">
            <a class="text-white text-xs sm:text-base">DEMO</a>
          </div>
        </div>
        <div class="flex text-white mt-10 text-[10px] sm:text-lg justify-between gap-10">
          <div class="flex flex-col text-left min-w-max">
            <a>CON SOLUCIONES</a>
            <div class="flex items-center gap-1 sm:gap-4">
              <a>DIGITALES</a>
              <div class="h-[1px] w-8 sm:w-14 bg-white"></div>
            </div>
          </div>
          <div class="flex w-full justify-between sm:justify-around">
            <div class="flex items-center gap-1 sm:gap-4">
              <a>&</a>
              <div class="h-[1px] w-4 sm:w-20 bg-white"></div>
              <a>MANEJAR</a>
            </div>
            <div class="flex items-center">
              <a>GASTOS EMPRESARIALES</a>
            </div>
          </div>
        </div>
      </header>
      <body class="flex min-h-screen">
        <div class="flex mt-16 sm:mt-0 items-center text-white justify-center gap-2">
          <h2 class="text-6xl sm:text-[200px] font-seriguela mt-4">RENDIR</h2>
          <div class="flex flex-col">
            <h2 class="text-6xl sm:text-[200px] font-seriguela">GASTOS HECHO</h2>
            <div class="flex items-center gap-1">
              <img src="/src/assets/ticket_xl.png" class="h-10 sm:h-36 sm:mt-3" />
              <h2 class="text-6xl sm:text-[200px] font-seriguela">SIMPLE</h2>
            </div>
          </div>
        </div>
      </body>
      <footer class="flex w-screen justify-center text-xs sm:text-base text-white mt-72 sm:mt-36 flex-col items-center">
        <a>SOLICITA LA DEMO Y COMENZÁ YA MISMO<br />A DISFRUTAR DEL PROCESO DE <br /><span class="italic">RENDICIÓN DE GASTOS</span></a>
        <image src="/src/assets/arrow_down.png" class="w-6 mt-4" />
      </footer>
    </div>
  </div>
  <LandingContent></LandingContent>
</template>

<script>
import LandingContent from './LandingContent.vue'
export default {
  name: 'App',
  methods: {},
  components: {
    LandingContent,
  },
}
</script>
