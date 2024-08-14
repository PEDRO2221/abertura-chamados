<template>
  <div>
    <notifications />
    <div class="background">
      <SCompNavBar />
      <div class="main">
        <div class="menu-rapido">
          <ul>
            <li @click="ativaPendentes" :style="btn2">Pendentes</li>
            <li @click="ativaConcluidos" :style="btn3">Concluídos</li>
            <li @click="ativaTodos" :style="btn1">Todos</li>
          </ul>
        </div>
        <router-view></router-view>
        <STodosChamados v-show="exibirTodos" />
        <button class="btn btn-primary">
          <i class="bi bi-plus-lg" @click="novoChamado"> Novo</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SCompNavBar from "../../../components/solicitante/SCompNavBar.vue";
import STodosChamados from "./STodosChamados.vue";

export default defineComponent({
  name: "SChamados",
  components: {
    SCompNavBar,
    STodosChamados,
  },
  data() {
    return {
      btn1: "",
      btn2: "background-color: #d0e3fe; color: #518feb;",
      btn3: "",
      exibirTodos: false,
    };
  },
  methods: {
    ativaTodos() {
      this.$router.push("/solicitante/chamados");
    },
    ativaPendentes() {
      this.$router.push("/solicitante/chamados/pendentes");
    },
    ativaConcluidos() {
      this.$router.push("/solicitante/chamados/concluidos");
    },
    atualizaEstado() {
      if (this.$route.path === "/solicitante/chamados") {
        this.btn1 = "background-color: #d0e3fe; color: #518feb;";
        this.btn2 = "";
        this.btn3 = "";
        this.exibirTodos = true;
      } else if (this.$route.path === "/solicitante/chamados/pendentes") {
        this.btn1 = "";
        this.btn2 = "background-color: #d0e3fe; color: #518feb;";
        this.btn3 = "";
        this.exibirTodos = false;
      } else if (this.$route.path === "/solicitante/chamados/concluidos") {
        this.btn1 = "";
        this.btn2 = "";
        this.btn3 = "background-color: #d0e3fe; color: #518feb;";
        this.exibirTodos = false;
      }
    },
    novoChamado() {
      this.$router.push("/solicitante/novo-chamado");
    },
  },
  watch: {
    $route() {
      this.atualizaEstado();
    },
  },
  created() {
    if (this.$route.path === "/solicitante/chamados") {
      this.$router.push("/solicitante/chamados/pendentes");
    }
    this.atualizaEstado();
  },
});
</script>

<style scoped>
.background {
  background-color: #6ea8fe;
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
}

.menu-rapido ul {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
.menu-rapido ul li {
  min-width: 90px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #eae7ea;
  cursor: pointer;
}

.menu-rapido ul li:hover {
  opacity: 0.8;
}

.btn-primary {
  font-family: Poppins;
  font-weight: 400;
  border: none;
  border-radius: 50px;
  color: #fff;
  background: #6ea8fe;
  float: right;
  position: fixed;
  z-index: 1;
  left: 70%;
  top: 90%;
}
</style>
