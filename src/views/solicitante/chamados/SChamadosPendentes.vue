<template>
  <div>
    <SCardChamados :chamados="dados" />
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD:src/views/solicitante/chamados/ChamadosPendentes.vue
import CardChamados from "../../../components/CardChamados.vue";
=======
import SCardChamados from "@/components/solicitante/SCardChamados.vue";
>>>>>>> f647fc87cb02aa2d4f500ab84f90603210712df6:src/views/solicitante/chamados/SChamadosPendentes.vue

export default {
  name: "SChamadosPendentes",
  components: {
    SCardChamados,
  },
  data() {
    return {
      chamadosPendentes: [
      
      ],
    };
  },
};
</script>
