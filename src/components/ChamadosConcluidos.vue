<template>
  <CardChamados :chamados="chamadosConcluidos" />
</template>

<script lang="ts">
import CardChamados from "./CardChamados.vue";

export default {
  name: "ChamadosConcluidos",
  components: {
    CardChamados,
  },
  data() {
    return {
      chamadosConcluidos: [
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00024",
          setor: "Manutenção",
          status: true,
          periodo: "Há 3 meses",
          prioridade: "Baixa",
        },
        {
          imagem: "tomada.jpg",
          situacao: "Tomada da sala com problema...",
          id: "00027",
          setor: "Elétrico",
          status: true,
          periodo: "Há 1 dia",
          prioridade: "Alta",
        },
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00030",
          setor: "Manutenção",
          status: true,
          periodo: "Há 3 meses",
          prioridade: "Baixa",
        },
      ],
    };
  },
};
</script>
