<template>
  <div>
    <div class="card" v-for="chamado in chamados" :key="chamado.id">
      <h2>{{ chamado.situacao }}</h2>
      <div class="card-content">
        <img
          :src="`/src/assets/imagens/${chamado.imagem}`"
          alt="Imagem do chamado"
          class="card-image"
        />
        <div class="card-text">
          <div class="card-text-column">
            <p>
              <i class="bi bi-ticket-perforated"></i>
              <strong>{{ chamado.id }}</strong>
            </p>
            <p>
              <i class="bi bi-building-fill-gear"></i>
              {{ chamado.setor }}
            </p>
            <p class="check">
              <i class="bi bi-check2-square"></i
              ><strong>{{ chamado.status }}</strong>
            </p>
          </div>
          <div class="card-text-column">
            <p>
              <i class="bi bi-calendar-event"></i>
              {{ chamado.periodo }}
            </p>
            <p>
              <i class="bi bi-exclamation-diamond"></i>
              {{ chamado.prioridade }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardChamados",
  data() {
    return {
      chamados: [
        {
          imagem: "ventilador.jpg",
          situacao: "O ventilador não está funcionando...",
          id: "00025",
          setor: "Manutenção",
          status: "Concluído",
          periodo: "Há 3 meses",
          prioridade: "Baixa",
        },
        {
          imagem: "folha.webp",
          situacao: "Acabou o estoque de folha A4...",
          id: "00026",
          setor: "Reposição",
          status: "Concluído",
          periodo: "Há 2 semanas",
          prioridade: "Baixa",
        },
        {
          imagem: "tomada.jpg",
          situacao: "Tomada da sala com problema...",
          id: "00027",
          setor: "Elétrico",
          status: "Concluído",
          periodo: "Há 1 dia",
          prioridade: "Alta",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  background: #f2f3f5;
  border-radius: 5px;
  border: none;
  padding: 6px;
  max-width: 327px;
  height: 115px;
  margin: 20px auto;
}

h2 {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
}

.card-content {
  display: flex;
  align-items: flex-start;
}

.card-image {
  border-radius: 5px;
  width: 80px;
  height: 72px;
  margin-right: 20px;
}

.card-text {
  display: flex;
  gap: 30px;
  justify-content: space-between;
}

.card-text-column {
  display: flex;
  flex-direction: column;
}

.card-text-column p {
  font-family: Poppins;
  font-weight: 400;
  font-size: 11px;
  margin-bottom: 10px;
  text-align: left;
  align-items: center;
}

.card-text-column p i {
  margin-right: 8px;
}

.check {
  color: #20c997;
}
</style>
