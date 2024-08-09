<template>
  <div class="background">
    <CompNavTabs text="RESUMO DO CHAMADO" @click="voltar" />
    <div class="main">
      <div>
        <span class="confira">Confira as informações abaixo</span>
      </div>
      <div>
        <img src="../../../assets/imagens/tomada.jpg" alt="" class="img" />
      </div>
      <div class="card-box">
        <table>
          <tbody>
            <tr>
              <td class="opcoes">
                <i class="bi bi-person-bounding-box icon"></i>
                <div class="opcoes-content">
                  <strong>Solicitante</strong>
                  <span>Tatiane - Saber 1</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="opcoes">
                <i class="bi bi-exclamation-triangle icon"></i>
                <div class="opcoes-content">
                  <strong>Grau de prioridade</strong>
                  <span>Médio</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="opcoes">
                <i class="bi bi-house-door icon"></i>
                <div class="opcoes-content">
                  <strong>Setor pertencente</strong>
                  <span>Centro de transformção</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="opcoes">
                <i class="bi bi-buildings icon"></i>
                <div class="opcoes-content">
                  <strong>Atribuir setor</strong>
                  <span>Manutenção</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="opcoes">
                <i class="bi bi-calendar icon"></i>
                <div class="opcoes-content">
                  <strong>Data do Chamado</strong>
                  <span>27/05/2024</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="opcoes">
                <i class="bi bi-chat-dots icon"></i>
                <div class="opcoes-content">
                  <strong>Descrição</strong>
                  <span
                    >O ventilador não funciona girando e está com barulho.</span
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <CompBotao text="CONFIRMAR" class="botao1" @click="confirm" />
        <CompBotao text="VOLTAR" class="botao2" @click="voltar" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CompBotao from "@/components/CompBotao.vue";
import CompNavTabs from "@/components/CompNavTabs.vue";

export default defineComponent({
  name: "Resumo",
  components: {
    CompNavTabs,
    CompBotao,
  },
  methods: {
    voltar() {
      this.$router.push("/solicitante/novo-chamado");
    },
    confirm() {
      this.$router.push("/solicitante/check");
    },
  },
});
</script>

<style scoped>
.background {
  background-color: #6ea8fe;
  height: 100vh;
  display: flex;
  margin: 0px;
  flex-direction: column;
}
.main {
  border-radius: 12px 12px 0px 0px;
  background-color: white;
  box-shadow: 1px 1px 20px 1px #00000055;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
  padding: 20px 0px;
}
main div {
  margin: 10px;
  width: 100%;
}
img {
  width: 320px;
  height: 272px;
  border-radius: 9px;
}
.card-box {
  display: flex;
  background-color: #ced4da;
  width: 85%;
  padding: 18px 10px;
  flex-direction: column;
  border-radius: 7px;
}

span {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
}
.confira {
  color: #6c757d;
}
.icon,
i {
  font-size: 28px;
}

.opcoes {
  display: flex;
  align-items: center;
}

.opcoes-content {
  display: flex;
  margin: 0px 15px;
  flex-direction: column;
}

strong {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
}

tbody {
  margin: 0px 10px;
  display: flex;
  gap: 15px;
  flex-direction: column;
}
.botao1 {
  background-color: #f18b11;
  color: white;
}
.botao2 {
  color: #f18b11;
  border: 1px solid #f18b11;
}
</style>
