<template>
    <tr>
        <td>
            {{id}}
        </td>
        <td>
            {{nome}}
        </td>
        <td>
            {{valor}}
        </td>
        <td>
            {{cliente}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'LinhaPedido',
        props: {
            id: Number,
            nome: String,
            valor: Number,
            cliente: String
        }
    }
</script>