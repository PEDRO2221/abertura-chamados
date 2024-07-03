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
              <img src="../assets/imagens/bilhete.png" alt="ticket" /><strong>{{
                chamado.id
              }}</strong>
            </p>
            <p>
              <img src="../assets/imagens/predio-comercial.png" alt="predio" />{{
                chamado.setor
              }}
            </p>
            <p class="check">
              <img src="../assets/imagens/selecione.png" alt="check" /><strong>{{
                chamado.status
              }}</strong>
            </p>
          </div>
          <div class="card-text-column">
            <p>
              <img src="../assets/imagens/calendario.png" alt="calendário" />{{
                chamado.periodo
              }}
            </p>
            <p>
              <img src="../assets/imagens/sereia.png" alt="alerta" />{{
                chamado.prioridade
              }}
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
  border-radius: 10px;
  padding: 10px;
  max-width: 310px;
  height: auto;
  margin: 20px auto;
}

.card h2 {
  font-size: 14px;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
}

.card-content {
  display: flex;
  align-items: flex-start;
}

.card-image {
  border-radius: 8px;
  width: 100px;
  height: 80px;
  margin-right: 20px;
}

.card-text {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.card-text-column {
  display: flex;
  flex-direction: column;
}

.card-text-column p {
  font-size: 10px;
  margin-bottom: 4px;
  text-align: left;
  display: flex;
  align-items: center;
}

.card-text-column p img {
  margin-right: 10px;
  height: 16px;
  width: auto;
}

.check {
  color: #20c997;
}
</style>
