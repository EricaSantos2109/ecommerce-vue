<template>
    <form>
        <h2>Cadastro de Cliente</h2>
        <input class="entrada" type="text" placeholder="Nome" required v-model="nome">
        <input class="entrada" type="text" placeholder="Email" required v-model="email">
        <input class="entrada" type="text" placeholder="Idade" required v-model="idade">
        <input class="entrada" type="password" placeholder="Senha" required v-model="senha">
        <input class="enviar" type="submit" @click="cadastro" value="Enviar">
    </form>

</template>

<script>
    import axios from "axios";
    export default {
        name: "cadastrar",
        data() {
            return {
                nome: "",
                email: "",
                idade: "",
                senha: "",
            };
        },
        methods: {
            cadastro() {
               JSON.stringify({
                    nome: this.nome,
                    email: this.email,
                    idade: this.idade,
                    senha: this.senha
                });
            }
        }
    }

</script>