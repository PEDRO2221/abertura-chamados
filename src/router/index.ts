import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/solicitante/Login.vue";
import RecuperarSenha from "../views/solicitante/RecuperarSenha.vue";
import Sobre from "../views/solicitante/Sobre.vue";
import NovoChamado from "../views/solicitante/chamados/NovoChamado.vue";
import Chamados from "../views/solicitante/chamados/Chamados.vue";
import ChamadosPendentes from "../views/solicitante/chamados/ChamadosPendentes.vue";
import ChamadosConcluidos from "../views/solicitante/chamados/ChamadosConcluidos.vue";
import ChamadosChecked from "../views/solicitante/chamados/ChamadosChecked.vue";
import DetalhesChamados from "../views/solicitante/chamados/DetalhesChamados.vue";
import ResumoChamado from "../views/solicitante/chamados/ResumoChamado.vue";

const routes = [
  // Rotas do Solicitante
  {
    path: "/solicitante",
    name: "Solicitante",
    children: [
      {
        path: "/solicitante/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/solicitante/racuperar-senha",
        name: "Recuperação de Senha",
        component: RecuperarSenha,
      },
      {
        path: "/solicitante/sobre",
        name: "Sobre",
        component: Sobre,
      },
      {
        path: "/solicitante/chamados",
        name: "Chamados",
        component: Chamados,
        children: [
          {
            path: "/solicitante/chamados/pendentes",
            name: "Chamados Pendentes",
            component: ChamadosPendentes,
          },
          {
            path: "/solicitante/chamados/concluidos",
            name: "Chamados Concluidos",
            component: ChamadosConcluidos,
          },
        ],
      },
      {
        path: "/solicitante/detalhes/:id",
        name: "Detalhes",
        component: DetalhesChamados,
        props: true,
      },
      {
        path: "/solicitante/novo-chamado",
        name: "Novo Chamado",
        component: NovoChamado,
      },
      {
        path: "/solicitante/resumo-chamado",
        name: "Resumo do Chamado",
        component: ResumoChamado,
      },
      {
        path: "/solicitante/check",
        name: "Checked",
        component: ChamadosChecked,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
