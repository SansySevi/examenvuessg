import Global from "@/Global";
import axios from "axios";

export default class EmpleadosServices {

    login(log) {
        return new Promise(function (resolve) {
            var request = "api/Manage/Login";
            var url = Global.urlApiCubos + request;

            axios.post(url, log).then(response => {
                resolve(response);
            })
        });
    }

    register(usuario) {
        return new Promise(function (resolve) { 
            var request = "api/Manage/RegistroUsuario";
            var url = Global.urlApiCubos + request;

            axios.post(url, usuario).then(response => {
                resolve(response);
            });
        });
    }

    getPerfil() {
        return new Promise(function (resolve) { 
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };

            var request = "/api/Manage/PerfilUsuario";
            var url = Global.urlApiCubos + request;

            axios.get(url, { headers }).then(response => {
                resolve(response);
            });
        });
    }

    getCompras() {
        return new Promise(function (resolve) {
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };

            var request = "api/Compra/ComprasUsuario";
            var url = Global.urlApiCubos + request;

            axios.get(url, { headers }).then(response => {
                resolve(response);
            });
        })
    }

    postCompra(idCubo) {
        return new Promise(function (resolve) {
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };
            var body= "";
            var request = "/api/compra/insertarpedido/" + idCubo;
            var url = Global.urlApiCubos + request;

            axios.post(url, body, { headers }).then(response => {
                resolve(response);
            });
        })
    }

    getCubos() {
        return new Promise(function (resolve) {
            var request = "api/Cubos";
            var url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                resolve(response);
            });
        })
    }

    getMarcas() {
        return new Promise(function (resolve) {
            var request = "api/Cubos/Marcas";
            var url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                resolve(response);
            });
        })
    }

    getCubosMarca(marca) {
        return new Promise(function (resolve) {
            var request = "api/Cubos/CubosMarca/" + marca;
            var url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                resolve(response);
            });
        })
    }

    getCubo(idCubo) {
        return new Promise(function (resolve) {
            var request = "api/Cubos/" + idCubo;
            var url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                resolve(response);
            });
        })
    }

    getComentarios(idCubo) {
        return new Promise(function (resolve) {
            var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
            var url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                resolve(response);
            });
        })
    }

}