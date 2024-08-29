<template>
  <div class="card" :style="`background-color: ${cor};`">
    <i :class="`${('icon', icone)}`"></i>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "GCardSetor",
  props: {
    icone: { type: String, required: true },
    text: { type: String, required: true },
    cor: { type: String, required: true },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  height: 160px;
  width: 160px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 80px;
}

span {
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  text-align: center;
  color: #fff;
  margin-top: 20px;
}
</style>
