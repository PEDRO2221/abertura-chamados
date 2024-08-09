<template>
  <div class="background">
    <CompNavTabs text="SOLICITAÇÃO CONFIRMADA" @click="voltar" />
    <div class="main">
      <div class="checked">
        <img src="../../../assets/imagens/checked.png" alt="" />
        <span class="status">CHAMADO SOLICITADO!</span>
      </div>
      <div class="text-div">
        <span class="text">
          Seu chamado foi encaminhado para o setor responsável. Acompanhe o
          status dele em
          <strong>“Meus Chamados”.</strong>
        </span>
      </div>
      <div class="ticket-number">
        <h2>Número do Ticket</h2>
        <div class="box-ticked">
          <span>000025</span>
        </div>
      </div>

      <div>
        <CompBotao text="Voltar" class="btn" @click="voltar" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CompBotao from "@/components/CompBotao.vue";
import CompNavTabs from "@/components/CompNavTabs.vue";

export default defineComponent({
  name: "Checked",
  components: {
    CompNavTabs,
    CompBotao,
  },
  methods: {
    voltar() {
      this.$router.push("/solicitante/chamados");
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
.text-div {
  display: flex;
  justify-content: center;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  width: 90%;
}
.checked {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.status {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
}
.main {
  border-radius: 12px 12px 0px 0px;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 20px 1px #00000055;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.ticket-number {
  gap: 10px;
  font-family: Poppins;
  font-size: 25px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box-ticked {
  background: #b4a7b347;
  padding: 10px 22px;
  border-radius: 6px;
}
.btn {
  background-color: #f18b11;
  color: white;
}
</style>
