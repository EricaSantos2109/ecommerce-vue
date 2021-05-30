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
            id: String,
            nome: String,
            valor: String,
            cliente: String
        }
    }
</script>