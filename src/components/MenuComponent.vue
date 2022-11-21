<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/#">API</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="marca in marcas" :key="marca">
                                <router-link class="dropdown-item" :to="'/cubosmarca/' + marca">
                                    {{ marca }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown" v-if="token">
                        <router-link class="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Zona Usuario
                        </router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/perfil">
                                    Ver Perfil
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/compras">
                                    Mis Compras
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex" v-if="!token">
                    <router-link class="btn btn-outline-light" to="/login">
                        Login
                    </router-link>
                    <router-link class="btn btn-outline-light" style="margin-left: 5px" to="/register">
                        Registrarse
                    </router-link>
                </div>
                <div class="d-flex" v-if="token">
                    <router-link class="btn btn-outline-light" to="/login">
                        Cerrar sesión
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import ApiCubosService from "../services/ApiCubosService";
const service = new ApiCubosService();

export default {
    name: "MenuComponent",
    methods: {
        loadMarcas() {
            service.getMarcas().then((response) => {
                this.marcas = response.data;
            });
        },
    },
    data() {
        return {
            marcas: [],
            token: "",
        };
    },
    mounted() {
        this.loadMarcas();
        this.token = localStorage.getItem("autho");
        console.log(this.token);
    },
    watch: {
    },
};
</script>

<style>
</style>
