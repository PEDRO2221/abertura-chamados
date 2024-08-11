<template>
  <div>
    <SCardChamados :chamados="dados" />
  </div>
</template>

<script lang="ts">
import SCardChamados from "@/components/solicitante/SCardChamados.vue";

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
