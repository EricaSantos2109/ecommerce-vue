import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import Clientes from '../views/Clientes.vue'
//import Pedidos from '../views/Pedidos.vue'
import Login from '../views/Login.vue'
//import CadastroCliente from '../views/CadastroCliente.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        redirect: store.state.token == null ? "/": ''
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        redirect: store.state.token == null ? "/": ''
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: () => import('../views/Clientes.vue'),
        redirect: store.state.token == null ? "/": ''
    },
    {
        path: '/cadastro-cliente',
        name: 'Cadastro',
        component: () => import('../views/CadastroCliente.vue'),
        redirect: store.state.token == null ? "/": ''
    },
     {
        path: '/cadastro-pedido',
        name: 'Pedidos',
        component: () => import('../views/CadastroPedido.vue'),
        redirect: store.state.token == null ? "/": ''
    },
    {
        path: '/pedidos',
        name: 'Pedidos',
        component: () => import('../views/Pedidos.vue'),
        redirect: store.state.token == null ? "/": ''
    },
    {
        path: '/',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
