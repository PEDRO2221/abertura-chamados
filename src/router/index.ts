import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Chamados from "../views/Chamados.vue";
import EsqueceSenha from "../views/EsqueceSenha.vue";

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
