<template>
  <div class="background">
    <div class="main">
      <nav class="navbar">
        <div class="container-fluid">
          <h1 class="navbar-brand">DETALHES DO SERVIÇO</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            @click="fecharPagina"
          ></button>
        </div>
      </nav>

      <SCardDetalhamento
        :chamados="detalhesChamado"
        :id="idChamadoSelecionado"
      />
    </div>
    <SCompBotao text="EDITAR" class="editar" />
    <SCompBotao text="VOLTAR" class="voltar" @click="fecharPagina" />
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD:src/views/solicitante/chamados/DetalhesChamados.vue
import CardDetalhamento from "../../../components/CardDetalhamento.vue";
import CompBotao from "../../../components/CompBotao.vue";
=======
import SCardDetalhamento from "@/components/solicitante/SCardDetalhamento.vue";
import SCompBotao from "@/components/solicitante/SCompBotao.vue";
>>>>>>> f647fc87cb02aa2d4f500ab84f90603210712df6:src/views/solicitante/chamados/SDetalhesChamados.vue

export default {
  name: "SDetalhesChamados",
  components: { SCardDetalhamento, SCompBotao },
  data() {
    return {
      detalhesChamado: [
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00024",
          setor: "Manutenção",
          status: true,
          periodo: "Há 3 meses",
          prioridade: "Baixa",
          solicitante: "Tatiane Simplício",
          local: "Centro de Transformação",
        },
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00025",
          setor: "Manutenção",
          status: false,
          periodo: "Há 3 meses",
          prioridade: "Baixa",
          solicitante: "Tatiane Simplício",
          local: "Centro de Transformação",
        },
        {
          imagem: "folha.webp",
          situacao: "Acabou o estoque de folha A4...",
          id: "00026",
          setor: "Reposição",
          status: false,
          periodo: "Há 2 semanas",
          prioridade: "Baixa",
          solicitante: "Tatiane Simplício",
          local: "Centro de Transformação",
        },
        {
          imagem: "tomada.jpg",
          situacao: "Tomada da sala com problema...",
          id: "00027",
          setor: "Elétrico",
          status: true,
          periodo: "Há 1 dia",
          prioridade: "Alta",
          solicitante: "Tatiane Simplício",
          local: "Centro de Transformação",
        },
        {
          imagem: "suporte-tv.jpg",
          situacao:
            "Solicito à equipe de serviços a fixação do suporte da TV...",
          id: "00029",
          setor: "Manutenção",
          status: true,
          periodo: "Há 2 dias",
          prioridade: "Baixa",
          solicitante: "Tatiane Simplício",
          local: "Centro de Transformação",
        },
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00030",
          setor: "Manutenção",
          status: true,
          periodo: "Há 3 meses",
          prioridade: "Baixa",
          solicitante: "Tatiane Simplício",
          local: "Centro de Transformação",
        },
      ],
    };
  },
  computed: {
    idChamadoSelecionado() {
      const id = this.$route.params.id;
      return typeof id === 'string' ? id : '';
    }
  },
  methods: {
    fecharPagina() {
      this.$router.push("/solicitante/chamados");
    },
  },
};
</script>

<style scoped>
.background {
  display: flex;
  margin: 0px;
  flex-direction: column;
}

h1 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  padding: 20px;
}

button {
  padding: 20px;
}

.editar {
  background-color: #f18b11;
  color: white;
}

.voltar {
  background-color: #fff;
  border: #f18b11 2px solid;
  color: #f18b11;
}
</style>
