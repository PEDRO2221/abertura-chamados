<template>
  <notifications />
  <div class="background">
    <NavBarComponent />
    <div class="main">
      <div class="menu-rapido">
        <ul>
          <li class="btn">Todos</li>
          <li class="btn">Pendentes</li>
          <li class="btn">Concluidos</li>
        </ul>
      </div>
      <CardChamados />
      <button class="btn btn-primary" type="submit">
        <i class="bi bi-plus-lg"> Novo</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import CardChamados from "./CardChamados.vue";
import NavBarComponent from "./NavBarComponent.vue";
export default {
  components: {
    NavBarComponent,
    CardChamados,
  },
  methods: {},
  data() {
    return {};
  },
};
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
  height: 90%;
  background-color: white;
  box-shadow: 1px 1px 20px 1px #00000055;
}

.menu-rapido ul {
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
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
