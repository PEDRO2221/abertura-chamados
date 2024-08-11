<template>
  <SCardChamados :chamados="dados" />
</template>

<script lang="ts">
import SCardChamados from "@/components/solicitante/SCardChamados.vue";

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
