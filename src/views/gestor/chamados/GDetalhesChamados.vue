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

      <GCardDetalhamento
        :chamados="detalhesChamado"
        :id="idChamadoSelecionado"
      />
    </div>
    <GCompBotao text="EDITAR" class="editar" />
    <GCompBotao text="VOLTAR" class="voltar" @click="fecharPagina" />
  </div>
</template>

<script lang="ts">
import GCardDetalhamento from "@/components/gestor/GCardDetalhamento.vue";
import GCompBotao from "@/components/gestor/GCompBotao.vue";

export default {
  name: "GDetalhesChamados",
  components: { GCardDetalhamento, GCompBotao },
  data() {
    return {
      detalhesChamado: [
        {
          imagem: "ventilador.jpg",
          descricao: "O ventilador não está funcionando...",
          id_chamado: "00024",
          setor_manutencao_id: "Manutenção",
          status: true,
          data_abertura: "Há 3 meses",
          grau_urgencia: "Baixa",
          solicitante_id: "Tatiane Simplício",
          setor_solicitante_id: "Centro de Transformação",
          comentario: "O conserto do ventilador foi realizado com sucesso e já está funcionando normalmente.",
        },
      ],
    };
  },
  computed: {
    idChamadoSelecionado() {
      const id = this.$route.params.id;
      return typeof id === "string" ? id : "";
    },
  },
  methods: {
    fecharPagina() {
      this.$router.push("/gestor/chamados");
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
