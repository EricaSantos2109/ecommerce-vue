<template>
    <form @submit.prevent="auth">
        <input class="entrada" type="text" v-model="nome" placeholder="Username" required>
        <input class="entrada" type="password" v-model="senha" placeholder="Senha" required>
        <input class="enviar" type="submit" value="Enviar">
    </form>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: "login",
        data() {
            return {
                nome: "",
                senha: ""
            };
        },
        methods: {
            ...mapActions(["login"]),
            auth() {
                this.login({ usuario: this.nome, senha: this.senha });}
        },
        beforeMount(){
            console.log(this.$store.state.token);
        }
    };
</script>