<template>
<div class="cubos">
    <div v-for="cubo in cubos" :key="cubo.idCubo" class="card" style="width: 18rem;">
        <img :src="cubo.imagen" class="card-img-top">
        <div class="card-body">
            <router-link :to="'/cubo/' + cubo.idCubo" class="card-title"> {{cubo.nombre}} </router-link>
            <p class="card-text">
                {{cubo.precio}} €
            </p>
        </div>
    </div>
</div>
</template>

<script>
import ApiCubosService from "../services/ApiCubosService";
const service = new ApiCubosService();

export default {
    name: "HomeComponent",
    methods: {
        loadCubos() {
            service.getCubos().then((response) => {
                this.cubos = response.data;
            });
        },
    },
    data() {
        return {
            cubos: [],
        };
    },
    mounted() {
        this.loadCubos();
    },
}
</script>

<style>
div.cubos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

div.card {
    margin: 25px;
}
</style>
