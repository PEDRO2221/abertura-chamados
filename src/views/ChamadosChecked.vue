<template>
  <div class="background">
    <NavTabs />
    <div class="main">
      <div class="checked">
        <img src="../assets/imagens/checked.png" alt="" />
        <span class="status">SERVIÇO SOLICITADO!</span>
      </div>
      <div class="text-div">
        <span class="text">
          Seu serviço foi encaminhado para o setor responsável. Acompanhe o
          status do serviço em
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
        <button type="submit" class="submit btn btn">Voltar</button>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import NavTabs from "../components/NavTabs.vue";

export default defineComponent({
  name: "Checked",
  methods: {},
  components: {
    NavTabs,
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
.submit {
  letter-spacing: 0.1em;
  background-color: #f18b11;
  padding: 16px, 24px, 16px, 24px;
  height: 48px;
  width: 328px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
}
</style>
  