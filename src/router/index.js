import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HowItWork from '../components/HowItWork.vue'
import Why from '../components/Why.vue'
import Pricing from '../components/Pricing.vue'
import Contact from '../components/Contact.vue'
import PageNotFound from '../components/PageNotFound.vue'
import Policy from '../components/Policy.vue'
import CambiosEnLaAdministracionDeGastos from '../components/CambiosEnLaAdministracionDeGastos.vue'
import cierreContableMejoresPracticasTecnologiaOlga from '../components/cierreContableMejoresPracticasTecnologiaOlga.vue'
import comoHacerPresupuestoEmpresarialOlga from '../components/comoHacerPresupuestoEmpresarialOlga.vue'
import comoHacerPresupuestoEmpresarialTransparencia from '../components/comoHacerPresupuestoEmpresarialTransparencia.vue'
import costosOcultosGestionDeGastosManualOlga from '../components/costosOcultosGestionDeGastosManualOlga.vue'
import digitalizarPresupuestoDeGastoAdministrativo from '../components/digitalizarPresupuestoDeGastoAdministrativo.vue'
import empresaRequieresRendicionDeGastosDigitalOlga from '../components/empresaRequieresRendicionDeGastosDigitalOlga.vue'
import factoresQueImpidenLatransparenciaEnTuGestionFinanciera from '../components/factoresQueImpidenLatransparenciaEnTuGestionFinanciera.vue'
import futuroPagosCorporativosDigitalesOlga from '../components/futuroPagosCorporativosDigitalesOlga.vue'
import habitosSaludablesParaTuNegocioGastoEmpresarial from '../components/habitosSaludablesParaTuNegocioGastoEmpresarial.vue'
import mitosDeLasTarjetasDeCreditoCorporativas from '../components/mitosDeLasTarjetasDeCreditoCorporativas.vue'
import trabajoRemotoHomeOfficeGestionFinancieraOlga from '../components/trabajoRemotoHomeOfficeGestionFinancieraOlga.vue'
import VentajasTarjetasDeViaticosCreditoDigitalesVentajas from '../components/VentajasTarjetasDeViaticosCreditoDigitalesVentajas.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    { path: '/', component: Home, hash: '' },
    { path: '/demo', component: Contact, hash: 'demo' },

    // { path: '/como-funciona', component: HowItWork, hash: 'como-funciona' },
    // { path: '/por-que', component: Why, hash: 'por-que' },
    // { path: '/precios', component: Pricing, hash: 'precios' },
    // { path: '/contacto', component: Contact, hash: 'contacto' },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
    { path: '/policy', component: Policy },
    { path: '/blog/cambios-en-la-administracion-de-gastos', component: CambiosEnLaAdministracionDeGastos },
    { path: '/blog/cierre-contable-mejores-practicas-tecnologia-olga', component: cierreContableMejoresPracticasTecnologiaOlga },
    { path: '/blog/como-hacer-presupuesto-empresarial-olga', component: comoHacerPresupuestoEmpresarialOlga },
    { path: '/blog/como-hacer-presupuesto-empresarial-transparencia', component: comoHacerPresupuestoEmpresarialTransparencia },
    { path: '/blog/costos-ocultos-gestion-de-gastos-manual-olga', component: costosOcultosGestionDeGastosManualOlga },
    { path: '/blog/digitalizar-presupuesto-de-gasto-administrativo', component: digitalizarPresupuestoDeGastoAdministrativo },
    { path: '/blog/empresa-requieres-rendicion-de-gastos-digital-olga', component: empresaRequieresRendicionDeGastosDigitalOlga },
    { path: '/blog/factores-que-impiden-latransparencia-en-tu-gestion-financiera', component: factoresQueImpidenLatransparenciaEnTuGestionFinanciera },
    { path: '/blog/futuro-pagos-corporativos-digitales-olga', component: futuroPagosCorporativosDigitalesOlga },
    { path: '/blog/habitos-saludables-para-tu-negocio-gasto-empresarial', component: habitosSaludablesParaTuNegocioGastoEmpresarial },
    { path: '/blog/mitos-de-las-tarjetas-de-credito-corporativas', component: mitosDeLasTarjetasDeCreditoCorporativas },
    { path: '/blog/trabajo-remoto-home-office-gestion-financiera-olga', component: trabajoRemotoHomeOfficeGestionFinancieraOlga },
    { path: '/blog/ventajas-tarjetas-de-viaticos-credito-digitales-ventajas', component: VentajasTarjetasDeViaticosCreditoDigitalesVentajas },
  ],
})

export default router
