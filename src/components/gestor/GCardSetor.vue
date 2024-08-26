<template>
  <div class="card">
    <i :class="icon" class="icon"></i>
    <span>{{ text }}</span>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  height: 160px;
  width: 160px;
  background-color: #409B7A;
  justify-content: center;
  align-items: center;
}
.icon {
  font-size: 90px;
  color: #fff;
}
span {
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  text-align: center;
}
</style>
<script>
export default {
  name: "GCardSetor",
  props: {
    icon: { type: String, required: true },
    text: { type: String, required: true },
  },
};
</script>
