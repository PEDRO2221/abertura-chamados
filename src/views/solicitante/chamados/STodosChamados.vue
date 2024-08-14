<template>
  <SCardChamados :chamados="dados" />
</template>

<script lang="ts">
<<<<<<< HEAD:src/views/solicitante/chamados/TodosChamados.vue
import CardChamados from "../../../components/CardChamados.vue";
=======
import SCardChamados from "../../../components/solicitante/SCardChamados.vue";
>>>>>>> f647fc87cb02aa2d4f500ab84f90603210712df6:src/views/solicitante/chamados/STodosChamados.vue
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
        const dados = (await response.listartodos()).data;
        this.dados = dados;
        console.log(this.dados)
      } catch (error) {
        console.error("Erro ao fazer a requisição GET:", error);
      }
    },
    
    },
};
</script>
