<template>
  <div id="app">
    <div id="nav" v-if="this.$store.state.token != null">
      <router-link to="/home">Home</router-link> |
      <router-link to="/clientes" v-if="this.$store.state.tipo == 'ROLE_ADMIN'">Clientes | </router-link> 
      <router-link to="/pedidos" v-if="this.$store.state.tipo == 'ROLE_ADMIN'">Pedidos | </router-link>
      <router-link to="/cadastro-cliente">Cadastro de Clientes</router-link> |
      <router-link to="/cadastro-pedido">Cadastro de Pedido</router-link> |
      <a><p @click="sair">Sair</p></a>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        
      }
    },
    methods: {
      sair(){
        this.$store.commit("logout");
        this.$router.push("/");
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>