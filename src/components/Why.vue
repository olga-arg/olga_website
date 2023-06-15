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
  <div className="h-screen w-screen flex items-center">
    <div className="grid grid-cols-2 w-full items-center">
      <div className="flex flex-col items-center">
        <div className="flex mx-24 h-20 mb-10 items-center">
          <img className="mr-8" src="../assets/her.svg" alt="her_profile" />
          <p className="font-bold text-5xl">Por qué los contadores nos <span className="text-pink">aman</span></p>
        </div>
        <div className="bg-pink rounded-md w-max px-20 py-10 flex flex-col justify-center">
          <div className="self-center">
            <p className="text-white font-light text-xl mb-4">
              "Con Olga, la gestión de gastos es fácil y<br />
              agradable para todos los involucrados.<br />
              Ademas, es fácil de usar para todos, desde el<br />
              primer día."
            </p>
            <div className="flex items-center">
              <img src="../assets/martina.png" alt="quote" className="mr-5" />
              <div className="flex flex-col text-white">
                <p className="font-light">Martina Loga</p>
                <p className="font-medium">VP of Sales @VSA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-20">
        <div className="flex flex-col my-10">
          <img className="w-10 h-10" src="../assets/check.svg" />
          <p className="font-medium text-lg my-3">Aprobación de gastos</p>
          <p className="font-light">Aproba (o denega) gastos de tu equipo en segundos.</p>
        </div>
        <div className="flex flex-col my-10">
          <img className="w-10 h-10" src="../assets/eye.svg" />
          <p className="font-medium text-lg my-3">Rastrea gastos de manera fácil</p>
          <p className="font-light">
            Monitorea los gastos de tu equipo en tiempo real y esta<br />
            al tanto de los gastos.
          </p>
        </div>
        <div className="flex flex-col my-10">
          <img className="w-10 h-10" src="../assets/power.svg" />
          <p className="font-medium text-lg my-3">Empodera a tu equipo</p>
          <p className="font-light">
            Empodera a tu equipo para que realice gastos de<br />
            manera autonoma dentro de los limites.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <div className="h-screen w-screen flex items-center">
    <div className="grid grid-cols-2 w-full items-center">
      <div className="flex flex-col items-center">
        <div className="flex mx-24 h-20 mb-10 items-center">
          <img className="mr-8" src="../assets/him.svg" alt="him_profile" />
          <p className="font-bold text-5xl">Por qué los <span className="text-pink">empleados</span> aman Olga</p>
        </div>
        <div className="bg-pink rounded-md w-max px-20 py-10 flex flex-col justify-center">
          <div className="self-center">
            <p className="text-white font-light text-xl mb-4">
              "Nuestra app es muy práctica. Con la función<br />
              de tomar una foto de tus recibos al pagar<br />
              con tu tarjeta Olga, la gestión de tus gastos<br />
              se vuelve más fácil y eficiente que nunca."
            </p>
            <div className="flex items-center">
              <img src="../assets/sofia.png" alt="quote" className="mr-5" />
              <div className="flex flex-col text-white">
                <p className="font-light">Sofia Pino</p>
                <p className="font-medium">Manager @Milo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-20">
        <div className="flex flex-col my-10">
          <img className="w-10 h-10" src="../assets/card.svg" />
          <p className="font-medium text-lg my-3">Tarjetas Convenientes</p>
          <p className="font-light">Opciones de pago para cualquier situación.<br />Tarjetas virtuales para gastar en línea y tarjetas físicas<br />para el camino.</p>
        </div>
        <div className="flex flex-col my-10">
          <img className="w-10 h-10" src="../assets/dolars.svg" />
          <p className="font-medium text-lg my-3">Reembolsos rápidos</p>
          <p className="font-light">¿Atrapado sin su tarjeta? Escanea tu recibo y envía una<br />solicitud de reembolso directamente desde la aplicación.</p>
        </div>
        <div className="flex flex-col my-10">
          <img className="w-10 h-10" src="../assets/bills.svg" />
          <p className="font-medium text-lg my-3">Pagos de facturas simples</p>
          <p className="font-light">
            No más cadenas de correo electrónico interminables.<br />Carga facturas de proveedores en segundos para su <br />validación y pago por parte del equipo financiero.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
</script>
