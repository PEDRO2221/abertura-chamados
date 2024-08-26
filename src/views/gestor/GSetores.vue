<template>
  <div>
    <div class="background">
      <GCompNavBar />
      <div class="main">
        <GCardSetor icon="bi bi-hospital-fill" text="CT" />
        <GCardSetor icon="bi bi-hospital-fill" text="CT" />
        <GCardSetor icon="bi bi-hospital-fill" text="CT" />
        <GCardSetor icon="bi bi-hospital-fill" text="CT" />
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
