<template>
<div>
    <table class="table" *ngIf="compras">
        <thead>
            <tr>
                <th>Pedido</th>
                <th>Usuario</th>
                <th>Cubo</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="compra in compras" :key="compra">
                <td> {{compra.idPedido}} </td>
                <td> {{compra.idUsuario}} </td>
                <td> {{compra.idCubo}} </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ApiCubosService from '../services/ApiCubosService';
    const service = new ApiCubosService();

export default {
    name: "ComprasComponent",
    methods: {
        loadCompras() {
            service.getCompras().then(response => {
                localStorage.setItem("autho", response.data.response);
                this.$router.push("/");
            });
        }
    },
    data() {
        return{
            compras: [],
        }
    },
    mounted() {
        this.loadCompras();
    },
}
</script>

<style>

</style>
