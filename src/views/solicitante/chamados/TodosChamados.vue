<template>
  <CardChamados :chamados="dados" />
</template>

<script lang="ts">
<<<<<<< HEAD:src/components/TodosChamados.vue
import CardChamados from "./CardChamados.vue";
import ApiRequester from "../services/ApiRequester";
=======
import CardChamados from "@/components/CardChamados.vue";
>>>>>>> 68885f406b852a91b99eb4a828398e23fc5fa145:src/views/solicitante/chamados/TodosChamados.vue

export default {
  name: "TodosChamados",
  components: {
    CardChamados,
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
