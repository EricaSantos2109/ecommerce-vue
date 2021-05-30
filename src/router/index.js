import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Clientes from '../views/Clientes.vue'
import CadastroCliente from '../views/CadastroCliente.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
   {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
   {
    path: '/cadastro-cliente',
    name: 'Cadastro',
    component: CadastroCliente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
