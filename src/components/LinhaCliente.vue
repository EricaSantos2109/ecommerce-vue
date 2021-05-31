<template>
    <tr>
        <td>
            {{nome}}
        </td>
        <td>
            {{email}}
        </td>
        <td>
            {{idade}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'LinhaCliente',
        props: {
            nome: String,
            email: String,
            idade: Number
        }
    }
</script>