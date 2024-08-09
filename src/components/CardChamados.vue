<template>
  <div>
    <div class="card" v-for="chamado in chamados" :key="chamado.id">
      <router-link :to="`/solicitante/detalhes/${chamado.id}`" class="rota">
        <div>
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
                <p class="check" v-if="chamado.status">
                  <i class="bi bi-check2-square"></i><strong>Concluído</strong>
                </p>
                <p class="pending" v-else>
                  <i class="bi bi-arrow-clockwise"></i><strong>Pendente</strong>
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
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import ApiRequester from "../services/ApiRequester";

export default {
  name: "CardChamados",
  created() {
    this.buscarDados();
  },
  data() {
    return {
      dados: [],
      token: sessionStorage.getItem("authToken"), // Adicione seu token aqui
    };
  },
  methods: {
    async buscarDados() {
      try {
        const response = new ApiRequester();
        const dados = (await response.listartodos()).data;
        console.log(JSON.stringify(dados));
        return dados;
      } catch (error) {
        console.error("Erro ao fazer a requisição GET:", error);
      }
    },
  },
  props: {
    chamados: {
      type: Array as PropType<
        {
          imagem: string;
          situacao: string;
          id: string;
          setor: string;
          status: boolean;
          periodo: string;
          prioridade: string;
        }[]
      >,
      required: true,
    },
  },
};
</script>

<style scoped>
.rota {
  text-decoration: none;
  color: inherit;
}

.card {
  background: #f2f3f5;
  border-radius: 5px;
  border: none;
  padding: 6px;
  max-width: 327px;
  height: auto;
  margin: 20px auto;
  transition: border 0.5s ease, transform 0.5s ease;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.05);
  border: #6da7fc 1px solid;
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

.pending {
  color: #f18b11;
}
</style>
