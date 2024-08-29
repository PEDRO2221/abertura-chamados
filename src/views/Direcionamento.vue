<template>
  <div>
    <div class="logo">
      <img src="/src/assets/logo-amigos.png" alt="Logo Amigos do Bem" />
    </div>
    <div class="corpo">
      <h1 class="text-body-secondary">Você Deseja</h1>

      <div class="login-container">
        <div class="image-item solicitante" @click="direcionarSolicitante">
          <img src="/src/assets/imagens/person-fill.svg" alt="Solicitante" />
          <p class="img2">Solicitante</p>
        </div>
        <div class="image-item gestor" @click="direcionarGestor">
          <img src="/src/assets/imagens/person-fill-gear.svg" alt="Gestor" />
          <p class="img3">Gestor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Direcionamento",
  methods: {
    direcionarSolicitante() {
      this.$router.push("/solicitante/login");
    },
    direcionarGestor() {
      this.$router.push("/gestor/login");
    },
  },
};
</script>

<style scoped>
.logo {
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 40vh;
}

.logo img {
  width: 208px;
  height: 208px;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.corpo {
  border-radius: 12px;
  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.304);
  height: 60vh;
  padding-top: 40px;
}

.text-body-secondary {
  font-weight: 400;
  font-size: 36px;
  font-family: Poppins;
  text-align: center;
  margin: 20px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(204, 190, 190, 0.778);
  width: 160px;
  height: 160px;
}

.image-item img {
  width: 80px;
  height: 80px;
  filter: invert(1);
}

.image-item p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.solicitante {
  background-color: #6ea8fe;
  cursor: pointer;
}

.gestor {
  background-color: #555450;
  cursor: pointer;
}

.img2,
.img3 {
  font-size: 16px;
}
</style>
