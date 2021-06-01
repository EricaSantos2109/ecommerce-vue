<template>
    <form @submit.prevent="cadastrarUsuario">
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" class="form-control" required autofocus v-model="nome" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" required autofocus v-model="email" />
        </div>
        <div class="form-group">
            <label for="idade">Idade</label>
            <input type="text" id="idade" class="form-control" required autofocus v-model="idade" />
        </div>
        <div class="form-group">
            <label for="senha">Senha</label>
            <input type="text" id="senha" class="form-control" required autofocus v-model="senha" />
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
            Salvar
        </button>
    </form>

</template>

<script>
    import router from '../router'
    import axios from 'axios'

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
            cadastrarUsuario() {
                var req = {
                    "nome": this.nome,
                    "email": this.email,
                    "idade": this.idade,
                    "senha": this.senha
                }

                console.log(req);
                
                axios.post("/cliente/", req).then(res => {
                    console.log(res);
                    alert("Cadastro criado com sucesso");
                    router.push('home');
                }).catch(error => {
                    //if (error.response.status === 409) {
                    //alert(error.response.data.message)
                    console.log(error);
                    //}
                })
            }
        },
    };
</script>