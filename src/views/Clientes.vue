<template>
    <table class="table-admin" style="width:50%">
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
        </tr>
        <linha-clientes v-for="(cliente, indice) in clientes" :nome="cliente.nome" :email="cliente.email"
            :idade="cliente.idade" :key="indice"></linha-clientes>
    </table>
</template>

<script>
    import LinhaClientes from '../components/LinhaCliente'
    import axios from "axios";
    export default {
        name: 'app',
        components: {
            'linha-clientes': LinhaClientes
        },
        data() {
            return {
                clientes: [],
            }
        },
        methods: {
            atualizar() {
                axios
                    .get("/cliente")
                    .then((res) => {
                        console.log(res);
                        this.clientes = res.data;
                    })
                    .catch((error) => console.log(error));
            }
        },
        created() {
            this.atualizar();
        } 
    }
</script>