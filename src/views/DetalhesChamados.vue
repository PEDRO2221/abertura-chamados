<template>
  <div class="background">
    <div class="main">
      <nav class="navbar">
        <div class="container-fluid">
          <h1 class="navbar-brand">DETALHES DO SERVIÇO</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            @click="fecharPagina"
          ></button>
        </div>
      </nav>
      <section class="text-center">
        <img
          src="../assets/imagens/suporte-tv.jpg"
          class="rounded"
          alt="Integrantes da Startup"
        />
      </section>
      <CardDetalhamento />
    </div>
    <button type="submit" class="editar btn btn">EDITAR</button>
  <button type="submit" class="voltar btn btn">VOLTAR</button>
  </div>
</template>

<script lang="ts">
import CardDetalhamento from '../components/CardDetalhamento.vue';
export default {
  name: "DetalhesChamados",
  components: {CardDetalhamento},
  methods: {
    fecharPagina() {
      this.$router.push("/chamados");
    },
  },
};
</script>

<style scoped>
.background {
  height: 100vh;
  display: flex;
  margin: 0px;
  flex-direction: column;
}

h1 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  padding: 20px;
}

img {
  width: 200px;
}

button {
  padding: 20px;
}

.editar, .voltar {
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
}

.editar {
  background-color: #f18b11;
  color: white;
}

.voltar {
  background-color: #fff;
  border: #f18b11 2px solid;
  color: #f18b11;
}
</style>
