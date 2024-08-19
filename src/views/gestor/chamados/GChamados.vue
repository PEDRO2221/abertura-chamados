<template>
  <div>
    <notifications />
    <div class="background">
      <GCompNavBar />
      <div class="main">
        <div class="menu-rapido">
          <ul>
            <li @click="ativaPendentes" :style="btn2">Pendentes</li>
            <li @click="ativaConcluidos" :style="btn3">Concluídos</li>
            <li @click="ativaTodos" :style="btn1">Todos</li>
          </ul>
        </div>
        <router-view></router-view>
        <GTodosChamados v-show="exibirTodos" />
        <button class="btn-primary">
          <i class="" @click="novoChamado">Setores</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GCompNavBar from "../../../components/gestor/GCompNavBar.vue";
import GTodosChamados from "./GTodosChamados.vue";

export default defineComponent({
  name: "GChamados",
  components: {
    GCompNavBar,
    GTodosChamados,
  },
  data() {
    return {
      btn1: "",
      btn2: "background-color: #7e7e7b; color: #D9D9D9;",
      btn3: "",
      exibirTodos: false,
    };
  },
  methods: {
    ativaTodos() {
      this.$router.push("/gestor/chamados");
    },
    ativaPendentes() {
      this.$router.push("/gestor/chamados/pendentes");
    },
    ativaConcluidos() {
      this.$router.push("/gestor/chamados/concluidos");
    },
    atualizaEstado() {
      if (this.$route.path === "/gestor/chamados") {
        this.btn1 = "background-color: #7e7e7b; color: #D9D9D9;";
        this.btn2 = "";
        this.btn3 = "";
        this.exibirTodos = true;
      } else if (this.$route.path === "/gestor/chamados/pendentes") {
        this.btn1 = "";
        this.btn2 = "background-color: #7e7e7b; color: #D9D9D9;";
        this.btn3 = "";
        this.exibirTodos = false;
      } else if (this.$route.path === "/gestor/chamados/concluidos") {
        this.btn1 = "";
        this.btn2 = "";
        this.btn3 = "background-color: #7e7e7b; color: #D9D9D9;";
        this.exibirTodos = false;
      }
    },
    novoChamado() {
      // this.$router.push("/gestor/novo-chamado");
    },
  },
  watch: {
    $route() {
      this.atualizaEstado();
    },
  },
  created() {
    if (this.$route.path === "/gestor/chamados") {
      this.$router.push("/gestor/chamados/pendentes");
    }
    this.atualizaEstado();
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
  background-color: #555450;
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
  padding: 10px 20px;
  color: #fff;
  background: #555450;
  float: right;
  position: fixed;
  z-index: 1;
  left: 70%;
  top: 90%;
}

.btn-primary:focus, .btn-primary:active {
  background: #5554509f;
}
</style>
