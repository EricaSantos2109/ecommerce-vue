<template>
    <div>
        <h1>Bem Vindo!</h1>
        <img src="../assets/images/ecommerce.jpg">
    </div>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        components: {

        },
        beforeMount(){
            console.log(this.$store.state.token);
        }
    }
</script>