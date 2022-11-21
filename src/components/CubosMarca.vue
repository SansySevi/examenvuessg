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
    name: "CubosMarca",
    methods: {
        loadCubos() {
            service.getCubosMarca(this.$route.params.marca).then((response) => {
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
    watch: {
        '$route.params.marca'(nextVal, oldVal){
            console.log(nextVal, oldVal);
                if (nextVal != oldVal){
                    this.loadCubos();
                }
            }
    }
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
