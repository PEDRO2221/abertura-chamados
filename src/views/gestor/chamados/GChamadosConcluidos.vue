<template>
  <GCardChamados :chamados="dados" />
</template>

<script lang="ts">

import GCardChamados from "../../../components/gestor/GCardChamados.vue";

export default {
  name: "GChamadosConcluidos",
  components: {
    GCardChamados,
  },
  data() {
    return {
      chamadosConcluidos: [
        
      ],
    };
  },
};
</script>
