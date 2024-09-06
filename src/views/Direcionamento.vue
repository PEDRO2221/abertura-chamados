<template>
  <div>
    <div class="logo">
      <img src="/src/assets/logo-amigos.png" alt="Logo Amigos do Bem" />
    </div>
    <div class="corpo">
      <h1 class="text-body-secondary">ADB-CHAMADOS</h1>

      <div class="login-container">
        <div class="image-item chamados" @click="direcionarSolicitante">
          <i class="bi bi-ticket-detailed"></i>
          <p class="img2">Chamados</p>
        </div>
        <div class="image-item gestao" @click="direcionarGestor">
          <i class="bi bi-tools"></i>
          <p class="img3">Gestão</p>
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
      this.$router.push("/chamados/login");
    },
    direcionarGestor() {
      this.$router.push("/gestao/login");
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

i.bi {
  font-size: 60px;
  color: #fff;
}

i.bi.bi-ticket-detailed {
  transform: rotate(130deg);
}

.image-item p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.chamados {
  background-color: #6ea8fe;
  cursor: pointer;
}

.gestao{
  background-color: #555450;
  cursor: pointer;
}

.img2,
.img3 {
  font-size: 16px;
}
</style>
