<template>
<div>
    <form v-on:submit.prevent="logUsuario">
        <label class="form-label">
            Nombre:
        </label>
        <input class="form-control" type="text" v-model="login.nombre" />

        <label class="form-label">
            Usuario:
        </label>
        <input class="form-control" type="text" v-model="login.email" />

        <label class="form-label">
            Password:
        </label>
        <input class="form-control" type="password" v-model="login.pass" />

        <button class="btn btn-secondary">
            Login
        </button>
    </form>
</div>
</template>

<script>
import ApiCubosService from '../services/ApiCubosService';
const service = new ApiCubosService();

export default {
    name: "RegisterComponent",
    methods: {
        logUsuario() {
            service.register(this.usuario).then(response => {
                console.log(response);
                service.login(this.login).then(response => {
                    localStorage.setItem("autho", response.data.response);
                    this.$router.push("/");
                });
            });
        }
    },
    data() {
        return {
            usuario: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            }
        }
    }
}
</script>

<style>

</style>
