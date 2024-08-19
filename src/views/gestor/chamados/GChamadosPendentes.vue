<template>
  <div>
    <GCardChamados :chamados="dados" />
  </div>
</template>

<script lang="ts">

import GCardChamados from "@/components/gestor/GCardChamados.vue";

export default {
  name: "GChamadosPendentes",
  components: {
    GCardChamados,
  },
  data() {
    return {
      chamadosPendentes: [
      
      ],
    };
  },
};
</script>
