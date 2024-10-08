import { createRouter, createWebHistory } from "vue-router";

// Importes das Rotas do Solicitante
import SLogin from "../views/solicitante/SLogin.vue";
import SRecuperarSenha from "../views/solicitante/SRecuperarSenha.vue";
import SSobre from "../views/solicitante/SSobre.vue";
import SNovoChamado from "../views/solicitante/chamados/SNovoChamado.vue";
import SChamados from "../views/solicitante/chamados/SChamados.vue";
import SChamadosPendentes from "../views/solicitante/chamados/SChamadosPendentes.vue";
import SChamadosConcluidos from "../views/solicitante/chamados/SChamadosConcluidos.vue";
import SChamadosChecked from "../views/solicitante/chamados/SChamadosChecked.vue";
import SDetalhesChamados from "../views/solicitante/chamados/SDetalhesChamados.vue";
import SResumoChamado from "@/views/solicitante/chamados/SResumoChamado.vue";

// Importes das Rotas do Gestor
import GLogin from "../views/gestor/GLogin.vue";
import GRecuperarSenha from "../views/gestor/GRecuperarSenha.vue";
import GSobre from "../views/gestor/GSobre.vue";
import GChamados from "../views/gestor/chamados/GChamados.vue";
import GChamadosConcluidos from "../views/gestor/chamados/GChamadosConcluidos.vue";
import GChamadosPendentes from "../views/gestor/chamados/GChamadosPendentes.vue";
import GSetores from "@/views/gestor/GSetores.vue";
import GDetalhesChamados from "@/views/gestor/chamados/GDetalhesChamados.vue";

// Importe do Direcionamento
import Direcionamento from "@/views/Direcionamento.vue";

const routes = [
  // Rotas do Solicitante
  {
    path: "/solicitante",
    name: "Solicitante",
    children: [
      {
        path: "/solicitante/login",
        name: "SLogin",
        component: SLogin,
      },
      {
        path: "/solicitante/racuperar-senha",
        name: "SRecuperação de Senha",
        component: SRecuperarSenha,
      },
      {
        path: "/solicitante/sobre",
        name: "SSobre",
        component: SSobre,
      },
      {
        path: "/solicitante/chamados",
        name: "SChamados",
        component: SChamados,
        children: [
          {
            path: "/solicitante/chamados/pendentes",
            name: "SChamados Pendentes",
            component: SChamadosPendentes,
          },
          {
            path: "/solicitante/chamados/concluidos",
            name: "SChamados Concluidos",
            component: SChamadosConcluidos,
          },
        ],
      },
      {
        path: "/solicitante/detalhes/:id",
        name: "SDetalhes",
        component: SDetalhesChamados,
        props: true,
      },
      {
        path: "/solicitante/novo-chamado",
        name: "SNovo Chamado",
        component: SNovoChamado,
      },
      {
        path: "/solicitante/resumo-chamado",
        name: "SResumo do Chamado",
        component: SResumoChamado,
      },
      {
        path: "/solicitante/check",
        name: "SChecked",
        component: SChamadosChecked,
      },
    ],
  },

  // Rotas do Gestor
  {
    path: "/gestor",
    name: "Gestor",
    children: [
      {
        path: "/gestor/setores",
        name: "GSetores",
        component: GSetores,
      },
      {
        path: "/gestor/login",
        name: "GLogin",
        component: GLogin,
      },
      {
        path: "/gestor/racuperar-senha",
        name: "GRecuperação de Senha",
        component: GRecuperarSenha,
      },
      {
        path: "/gestor/sobre",
        name: "GSobre",
        component: GSobre,
      },
      {
        path: "/gestor/chamados",
        name: "GChamados",
        component: GChamados,
        children: [
          {
            path: "/gestor/chamados/pendentes",
            name: "GChamados Pendentes",
            component: GChamadosPendentes,
          },
          {
            path: "/gestor/chamados/concluidos",
            name: "GChamados Concluidos",
            component: GChamadosConcluidos,
          },
        ],
      },
      {
        path: "/gestor/setores",
        name: "GSetores",
        component: GSetores,
      },
      {
        path: "/gestor/detalhes/:id",
        name: "GDetalhes",
        component: GDetalhesChamados,
        props: true,
      },
    ],
  },

  // Rota de Direcionamento
  {
    path: "/",
    name: "Direcionamento do Usuario",
    component: Direcionamento,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
