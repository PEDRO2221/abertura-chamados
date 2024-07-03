import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Dashboard.vue";
import EsqueceSenha from "../components/EsqueceSenha.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Dashboard",
    component: Home,
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
