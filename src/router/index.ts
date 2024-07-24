import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Chamados from "../views/Chamados.vue";
import EsqueceSenha from "../views/EsqueceSenha.vue";
import Sobre from "../views/Sobre.vue";
import ChamadosPendentes from "../components/ChamadosPendentes.vue";
import ChamadosConcluidos from "../components/ChamadosConcluidos.vue";
import ChamadosChecked from "../views/ChamadosChecked.vue";
import DetalhesChamados from "../views/DetalhesChamados.vue";
import SolicitarServico from "../views/SolicitarServico.vue";


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
  {
    path: "/check",
    name: "Checked",
    component: ChamadosChecked,
  },
  {
    path: "/detalhes/:id",
    name: "Detalhes",
    component: DetalhesChamados,
    props: true,
  },
  {
    path: "/solicitacao",
    name: "Solicitacao",
    component: SolicitarServico,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
