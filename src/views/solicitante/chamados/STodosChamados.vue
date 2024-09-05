<template>
  <SCardChamados :chamados="dados" />
</template>

<script lang="ts">
import SCardChamados from "../../../components/solicitante/SCardChamados.vue";
import ApiRequester from "../../../services/ApiRequester";

export default {
  name: "STodosChamados",
  components: {
    SCardChamados,
  },
  created() {
    this.buscarDados();
  },
  data() {
    return {
      dados: [],
      token: sessionStorage.getItem("authToken"), // Adicione seu token aqui
    };
  },
  methods: {
    async buscarDados() {
      try {
        const response = new ApiRequester();
        const dados = (await response.listar()).data;
        this.dados = dados;
        console.log(this.dados)
      } catch (error) {
        console.error("Erro ao fazer a requisição GET:", error);
      }
    },
    
    },
};
</script>
