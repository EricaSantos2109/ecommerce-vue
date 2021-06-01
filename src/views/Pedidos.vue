<template>
    <table class="table-admin" style="width:50%">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Cliente</th>
        </tr>
        <linha-pedidos v-for="(pedido, indice) in pedidos" :id="pedido.id" :nome="pedido.nome" :valor="pedido.valor"
            :cliente="pedido.cliente.nome" :key="indice"></linha-pedidos>
    </table>
</template>

<script>
    import LinhaPedidos from '../components/LinhaPedido'
    import axios from "axios";
    export default {
        name: 'app',
        components: {
            'linha-pedidos': LinhaPedidos
        },
        data() {
            return {
                pedidos: []
            }
        },
        methods: {
            atualizar() {
                axios
                    .get("/pedido")
                    .then((res) => {
                        console.log(res);
                        this.pedidos = res.data;
                    })
                    .catch((error) => console.log(error));
            }
        },
        created() {
            this.atualizar();
        }
    }
</script>