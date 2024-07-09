import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Chamados from "../views/Chamados.vue";
import EsqueceSenha from "../views/EsqueceSenha.vue";
import Sobre from "../views/Sobre.vue";
import ChamadosPendentes from "../components/ChamadosPendentes.vue";
import ChamadosConcluidos from "../components/ChamadosConcluidos.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/senha",
    name: "Recuperacao",
    component: EsqueceSenha,
  },
  {
    path: "/chamados",
    name: "Chamados",
    component: Chamados,
    children: [
      {
        path: "/chamados/pendentes",
        name: "Chamados Pendentes",
        component: ChamadosPendentes,
      },
      {
        path: "/chamados/concluidos",
        name: "Chamados Concluidos",
        component: ChamadosConcluidos,
      },
    ],
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: Sobre,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
