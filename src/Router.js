import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import PefilComponent from "./components/PerfilComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import CubosMarca from "./components/CubosMarca.vue";
import DetallesCubo from "./components/DetallesCubo.vue";

const rutas = [
    {
        path: "/",
        component: HomeComponent
    },
    {
        path: "/cubosmarca/:marca",
        component: CubosMarca
    },
    {
        path: "/cubo/:idcubo",
        component: DetallesCubo
    },
    {
        path: "/login",
        component: LoginComponent
    },
    {
        path: "/register",
        component: RegisterComponent
    },
    {
        path: "/perfil",
        component: PefilComponent
    },
    {
        path: "/compras",
        component: ComprasComponent
    },
    {
        path: "/#",
        component: HomeComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: rutas
});

export default router;