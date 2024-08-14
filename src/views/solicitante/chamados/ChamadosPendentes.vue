<template>
  <div>
    <CardChamados :chamados="dados" />
  </div>
</template>

<script lang="ts">
import CardChamados from "../../../components/CardChamados.vue";

export default {
  name: "ChamadosPendentes",
  components: {
    CardChamados,
  },
  data() {
    return {
      chamadosPendentes: [
      
      ],
    };
  },
};
</script>
