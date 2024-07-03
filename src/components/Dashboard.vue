<template>
  <notifications />
  <div class="background">
    <NavBarComponent />
    <div class="main">
      <div class="menu-rapido">
        <ul>
          <li>Todos</li>
          <li>Pendentes</li>
          <li>Concluidos</li>
        </ul>
      </div>
    <CardChamados />
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
  height: 100vh;
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
}

.menu-rapido ul {
  display: flex;
  border-radius: 15px 0px 0px 0px;
  justify-content: space-evenly;
  padding: 10px;
}
.menu-rapido ul li {
  padding: 5px 8px;
  border-radius: 15px;
  background-color: #b4a7b347;
}
</style>
