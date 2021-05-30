<template>
    <table style="width:50%">
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
        </tr>
        <linha-clientes v-for="(cliente, indice) in clientes" :nome= "cliente.nome" :email= "cliente.email" :idade= "cliente.idade" :key= "indice"></linha-clientes>
    </table>
</template>

<script>
    import LinhaClientes from '../components/LinhaCliente'
    export default {
        name: 'app',
        components: {
            'linha-clientes': LinhaClientes
        },
        data() {
        return {
            clientes: [{ 
                nome: 'ADS',
                email: "email@com",
                idade: "15"
            },
            { 
                nome: 'ADS',
                email: "email@com",
                idade: "15"
            },{ 
                nome: 'ADS',
                email: "email@com",
                idade: "15"
            }
        ]
        }
        },
        methods: {
        }
    }
</script>