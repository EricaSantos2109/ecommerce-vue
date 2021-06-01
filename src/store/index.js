import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: localStorage
});

export default new Vuex.Store({
    state: {
        token: null,
        usuario: null,
        tipo: null
    },
    mutations: {
        setUsuario(state, usuario) {
            state.usuario = usuario;
        },
        setToken(state, token) {
            state.token = token;
        }, setTipo(state, tipo) {
            state.tipo = tipo;
        },
        logout(state) {
            state.token = null;
            state.usuario = null;
            state.tipo = null;
        }
    },
    actions: {
        login(context, { usuario, senha }) {
            axios
                .post("login", {
                    username: usuario,
                    password: senha
                })
                .then(res => {
                    console.log(res);
                    context.commit('setUsuario', usuario);
                    context.commit('setToken', res.data.token);
                    context.commit('setTipo', res.data.autorizacao);
                    router.push('/home');
                })
                .catch(error => console.log(error));
        },
        cadastrar(context, { nome, email, idade, senha }) {
            var hd = {'Authorization': 'Bearer ' + this.state.token, 'Content-Type': 'application/json'}
            var req = {
                "nome": nome,
                "email": email,
                "idade": idade,
                "senha": senha
            }

            //console.log(req);

            axios.post("/cliente/", hd, req).then(res => {
                console.log(res);
                router.push('/home');
            }).catch(error => {
                //if (error.response.status === 409) {
                //alert(error.response.data.message)
                console.log(error);
                //}
            })
        },
    },
    modules: {
    },
    plugins: [
        vuexPersist.plugin
    ]
})
