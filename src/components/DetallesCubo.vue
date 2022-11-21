<template>
<div>
    <div v-if="cubo">

        <!-- <div v-if="mensaje">
            <h1>{{mensaje}}</h1>
        </div> -->

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="cubo.imagen" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{cubo.nombre}}</h5>
                        <p class="card-text">Modelo: {{cubo.modelo}}, Marca: {{cubo.marca}}</p>
                        <p class="card-text">Color: {{cubo.color}}, Valoración: {{cubo.valoracion}}</p>
                        <p class="card-text"><small>{{cubo.precio}}€</small></p>
                        <!-- <button v-if="token" class="btn btn-warning" v-on:click="realizarCompra(cubo.idCubo)">
                            Comprar
                        </button> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="comentarios">
            <table>
                <tbody>
                    <tr v-for="comentario in comentarios" :key="comentario.idComentario">
                        <td>
                            {{comentario.fechaComentario}}
                        </td>
                        <td> {{comentario.comentario}} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import ApiCubosService from "../services/ApiCubosService";
const service = new ApiCubosService();

export default {
    name: "DetallesCubo",
    methods: {
        loadCubos() {
            service.getCubo(this.$route.params.idcubo).then((response) => {
                this.cubo = response.data;
            });
        },
        loadComentarios() {
            console.log(this.$route.params.idcubo);
            service.getComentarios(this.$route.params.idcubo).then((response) => {
                this.cubo = response.data;
            });
        }
    },
    data() {
        return {
            cubo: {
                idCubo: 0,
                nombre: "",
                modelo: "",
                marca: "",
                color: "",
                imagen: "",
                precio: 0,
                valoracion: 0
            },
            comentarios: [],
            token: ""
        };
    },
    mounted() {
        this.loadCubos();
        this.token = localStorage.getItem("autho");
        console.log(this.token);
    },
}
</script>

<style>

</style>
