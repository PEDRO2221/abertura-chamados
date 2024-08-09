<template>
  <CardChamados :chamados="dados" />
</template>

<script lang="ts">
import CardChamados from "@/components/CardChamados.vue";

export default {
  name: "ChamadosConcluidos",
  components: {
    CardChamados,
  },
  data() {
    return {
      chamadosConcluidos: [
        
      ],
    };
  },
};
</script>
