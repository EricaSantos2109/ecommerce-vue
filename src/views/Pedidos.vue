<template>
    <table style="width:50%">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Cliente</th>
        </tr>
        <linha-pedidos v-for="(pedido, indice) in pedidos" :id= "pedido.id" :nome= "pedido.nome" :valor= "pedido.valor" :cliente= "pedido.cliente" :key= "indice"></linha-pedidos>
    </table>
</template>

<script>
    import LinhaPedidos from '../components/LinhaPedido'
    export default {
        name: 'app',
        components: {
            'linha-pedidos': LinhaPedidos
        },
        data() {
        return {
            pedidos: [{ 
                id: 'ADS',
                nome: "email@com",
                valor: "15",
                cliente: "eu"
            },
            { 
                id: 'ADS',
                nome: "email@com",
                valor: "15",
                cliente: "eu"
            },{ 
                id: 'ADS',
                nome: "email@com",
                valor: "15",
                cliente: "eu"
            }
        ]
        }
        },
        methods: {
        }
    }
</script>