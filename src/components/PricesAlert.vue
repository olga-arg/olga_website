<template>
  <div className="h-screen w-screen absolute flex items-center  justify-center">
    <div className="h-5/6 w-2/6 flex flex-col bg-blue text-white items-center justify-center rounded-xl">
      <div className="mx-14 flex flex-col items-center justify-center">
        <p className="text-2xl">Usuarios adicionales</p>
        <p className="my-10">
          <span className="font-semibold text-sm">Los 3 primeros usuarios son gratuitos</span>, pero puedes añadir más. El precio por usuario adicional al mes depende del plan y
          del número de usuarios que se quieran añadir.
        </p>
        <div className="grid grid-cols-3 ">
          <div className="w-max">
            <p>Usuarios Adicionales</p>
            <div className="h-5"></div>
            <p>1-10</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>11-30</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>31-50</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>51-100</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>101-200</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>201-400</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>401-600</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>600+</p>
          </div>
          <div className="text-center">
            <p>Elite</p>
            <div className="h-5"></div>
            <p>$ 2200</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 2000</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 1900</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 1700</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 1500</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 1300</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 1100</p>
            <div className="h-0.5 bg-gray_hover  my-3"></div>
            <p>$ 950</p>
          </div>
          <div className="text-end">
            <p>Pro</p>
            <div className="h-5"></div>
            <p>$ 2600</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 2400</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 2200</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 2000</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 1800</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 1600</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 1400</p>
            <div className="h-0.5 bg-gray_hover my-3"></div>
            <p>$ 1300</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
</script>
