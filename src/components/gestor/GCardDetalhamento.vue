<template>
  <div v-for="chamado in chamados" :key="chamado.id_chamado">
    <section class="text-center">
      <img
        :src="`/src/assets/imagens/${chamado.imagem}`"
        class="rounded"
        alt="Imagem do chamado"
      />
    </section>
    <div class="tabela">
      <table>
        <thead class="head">
          <tr>
            <th rowspan="2" class="icon">
              <i class="bi bi-person-bounding-box"></i>
            </th>
            <th class="titulo">Solicitante</th>
          </tr>
          <tr>
            <td class="subtitulo">{{ chamado.solicitante_id }}</td>
          </tr>
          <tr>
            <th rowspan="2" class="icon">
              <i class="bi bi-house-door"></i>
            </th>
            <th class="titulo">Local</th>
          </tr>
          <tr>
            <td class="subtitulo">{{ chamado.setor_solicitante_id }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="opcoes">
              <div class="opcoes-content">
                <i class="bi bi-ticket-perforated"></i>
                <span
                  ><strong>{{ chamado.id_chamado }}</strong></span
                >
              </div>
            </td>
            <td class="opcoes">
              <div class="opcoes-content">
                <i class="bi bi-calendar-event"></i>
                <span>{{ chamado.data_abertura }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="opcoes">
              <div class="opcoes-content">
                <i class="bi bi-building-fill-gear"></i>
                <span>{{ chamado.setor_manutencao_id }}</span>
              </div>
            </td>
            <td class="opcoes">
              <div class="opcoes-content">
                <i class="bi bi-exclamation-diamond"></i>
                <span>{{ chamado.grau_urgencia }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <th colspan="2" class="descricao">Descrição</th>
          </tr>
          <tr>
            <td colspan="2" class="text">
              <span>{{ chamado.descricao }}</span>
            </td>
          </tr>
          <tr>
            <th colspan="2" class="descricao">
              Comentário da equipe de serviços
            </th>
          </tr>
          <tr>
            <td colspan="2">
              <textarea
                v-model="chamado.comentario"
                rows="4"
                cols="50"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <section class="dinheiro-content">
      <tr>
        <td><i class="bi bi-cash-coin"></i></td>
        <td>
          <input
            v-model="chamado.custo"
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
          />
        </td>
      </tr>
    </section>

    <section class="status">
      <div class="status-option">
        <input
          type="radio"
          id="concluido"
          name="status"
          value="concluido"
          v-model="chamado.status"
        />
        <label for="concluido">Concluído</label>
      </div>
      <div class="status-option">
        <input
          type="radio"
          id="pendente"
          name="status"
          value="pendente"
          v-model="chamado.status"
        />
        <label for="pendente">Pendente</label>
      </div>
      <div class="status-option">
        <input
          type="radio"
          id="cancelado"
          name="status"
          value="cancelado"
          v-model="chamado.status"
        />
        <label for="cancelado">Cancelado</label>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "GCardDetalhamento",
  props: {
    id: { type: String, required: true },
    chamados: {
      type: Array as PropType<
        {
          id: string;
          id_chamado: number;
          descricao: string;
          grau_urgencia: string;
          setor_solicitante_id: number;
          setor_manutencao_id: number;
          gestor_id: number;
          tecnico_id: number;
          solicitante_id: number;
          status: string;
          custo: string;
          imagem: string;
          data_abertura: string;
          data_fechamento: string | null;
          data_cancelamento: string | null;
          comentario: string;
        }[]
      >,
      required: true,
    },
  },
  methods: {
    atualizarStatus(chamado: any, novoStatus: string) {
      chamado.status = novoStatus;
      console.log("Status atualizado:", chamado.status);
    },
  },
});
</script>

<style scoped>
img {
  width: 200px;
  height: 140px;
}

.tabela {
  background: #f2f3f5;
  border-radius: 5px;
  border: none;
  padding: 20px 10px;
  max-width: 330px;
  height: auto;
  margin: 20px auto;
}

.head::after {
  content: "";
  display: block;
  margin-bottom: 14px;
}

.titulo {
  font-weight: 700;
  font-size: 16px;
  text-align: left;
}

.descricao {
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  padding: 14px 0px;
}

.subtitulo {
  font-weight: 700;
  font-size: 11px;
  text-align: left;
  color: #767575;
}

span {
  font-family: Poppins;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: left;
  color: #767575;
  padding: 2px;
}

th,
td {
  align-content: center;
}

.icon {
  text-align: right;
}

.icon > i {
  font-size: 30px;
  margin-right: 20px;
}

.opcoes {
  padding: 6px 0px;
}

.opcoes-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0px -40px 0px 40px;
}

.text {
  border: #767575 2px solid;
  padding: 30px 10px;
  width: 310px;
  height: auto;
}

textarea {
  width: 100%;
  background: none;
  border: none;
  padding: 10px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: left;
  color: #767575;
  padding: 2px;
  border: #767575 2px solid;
  padding: 30px 10px;
  width: 310px;
  height: auto;
}

.dinheiro-content {
  margin: auto;
  width: 260px;
}

.dinheiro-content > tr > td {
  border: 1px solid #dee2e6;
  margin: auto;
  height: 60px;
  align-content: space-around;
}

.dinheiro-content > tr {
  margin: auto;
}

.dinheiro-content > tr > td > input {
  border: none;
  width: 180px;
  text-align: center;
  font-family: monospace;
}

.dinheiro-content > tr > td > i {
  padding: 10px 18px;
  font-size: 30px;
}

input:focus {
  border: none;
  outline: none;
}

textarea:focus {
  border: none;
  outline: none;
  border: #767575 2px solid;
}

.status {
  display: flex;
  align-content: space-around;
  gap: 20px;
  margin: 30px auto;
  width: 340px;
}

.status-option > label {
  margin-left: 6px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
}

.status-option > input {
  transform: scale(1.4);
  accent-color: #000;
}
</style>
