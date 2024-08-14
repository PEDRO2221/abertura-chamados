<template>
  <SCardChamados :chamados="dados" />
</template>

<script lang="ts">
<<<<<<< HEAD:src/views/solicitante/chamados/ChamadosConcluidos.vue
import CardChamados from "../../../components/CardChamados.vue";
=======
import SCardChamados from "@/components/solicitante/SCardChamados.vue";
>>>>>>> f647fc87cb02aa2d4f500ab84f90603210712df6:src/views/solicitante/chamados/SChamadosConcluidos.vue

export default {
  name: "SChamadosConcluidos",
  components: {
    SCardChamados,
  },
  data() {
    return {
      chamadosConcluidos: [
        
      ],
    };
  },
};
</script>
