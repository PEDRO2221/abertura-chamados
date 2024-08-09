<template>
  <div>
    <CardChamados :chamados="chamadosPendentes" />
  </div>
</template>

<script lang="ts">
import CardChamados from "@/components/CardChamados.vue";

export default {
  name: "ChamadosPendentes",
  components: {
    CardChamados,
  },
  data() {
    return {
      chamadosPendentes: [
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00025",
          setor: "Manutenção",
          status: false,
          periodo: "Há 3 meses",
          prioridade: "Baixa",
        },
        {
          imagem: "folha.webp",
          situacao: "Acabou o estoque de folha A4...",
          id: "00026",
          setor: "Reposição",
          status: false,
          periodo: "Há 2 semanas",
          prioridade: "Baixa",
        },
      ],
    };
  },
};
</script>
