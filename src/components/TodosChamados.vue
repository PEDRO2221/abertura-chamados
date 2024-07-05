<template>
  <CardChamados :chamados="todosChamados" />
</template>

<script lang="ts">
import CardChamados from "./CardChamados.vue";

export default {
  name: "TodosChamados",
  components: {
    CardChamados,
  },
  data() {
    return {
      todosChamados: [
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
