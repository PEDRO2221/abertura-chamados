import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Chamados from "../components/Chamados.vue";
import EsqueceSenha from "../components/EsqueceSenha.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/chamados",
    name: "Chamados",
    component: Chamados,
  },
  {
    path: "/senha",
    name: "Recuperacao",
    component: EsqueceSenha,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
