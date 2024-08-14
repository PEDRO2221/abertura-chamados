<template>
    <button type="submit" class="botao btn btn">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: "SCompBotao",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style scoped>
.botao {
  border-radius: 5px;
  letter-spacing: 0.1em;
  height: 48px;
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 10px auto;
  text-transform: uppercase;
}
</style>
