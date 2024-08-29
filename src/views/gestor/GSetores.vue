<template>
  <div>
    <div class="background">
      <GCompNavBar textNav="SETORES"/>
      <div class="main">
        <GCardSetor
          v-for="(setor, index) in setores"
          :key="index"
          :text="setor.text"
          :icone="setor.icone"
          :cor="setor.cor"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GCompNavBar from "../../components/gestor/GCompNavBar.vue";
import GCardSetor from "../../components/gestor/GCardSetor.vue";
export default defineComponent({
  name: "GSetores",
  components: {
    GCompNavBar,
    GCardSetor,
  },
  data() {
    return {
      setores: [
        {
          cor: "#409B7A",
          icone: "fa-solid fa-school",
          text: "CT",
        },
        {
          cor: "#5CABD7",
          icone: "fa-solid fa-book-open",
          text: "ESCOLA",
        },
        {
          cor: "#F16B4D",
          icone: "fa-solid fa-industry",
          text: "FÁBRICA",
        },
        {
          cor: "#B884E0",
          icone: "fa-solid fa-users",
          text: "SEDE",
        },
        {
          cor: "#DCCC01",
          icone: "fa-solid fa-hand-holding-dollar",
          text: "EMPREENDEDORISMO",
        },
        {
          cor: "#B8997B",
          icone: "fa-solid fa-hospital-user",
          text: "CENTRO DE ATENDIMENTO",
        },
        {
          cor: "#5AC140",
          icone: "fa-solid fa-leaf",
          text: "CAMPO",
        },
        {
          cor: "#C25AA5",
          icone: "fa-solid fa-scissors",
          text: "COSTURA",
        },
      ],
    };
  },
});
</script>
<style scoped>
.background {
  background-color: #555450;
  height: 100%;
  display: flex;
  margin: 0px;
  flex-direction: column;
  justify-content: space-between;
}
.bg-body {
  --bs-bg-opacity: 0;
}

.menu {
  --bs-bg-opacity: 0;
  background-color: #6ea8fe;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  color: white;
}

.main {
  border-radius: 12px 12px 0px 0px;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 20px 1px #00000055;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  flex-wrap: wrap;
  gap: 35px 10px;
}
</style>
