<template>
  <nav class="navbar bg-body fixed menu">
    <div class="container-fluid d-flex justify-content-start">
      <button
        data-bs-toggle="offcanvas"
        class="navbar-brand border-0 bg-body"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i class="bi bi-list text-white"></i>
      </button>
      <a class="navbar-brand d-flex justify-content-start text-white" href="#"
        >Bem Vindo</a
      >
      <div
        class="offcanvas offcanvas-start menu"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Opções</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="user">
            <img src="@/assets/logo-amigos.png" alt="" width="60px" />
            <div class="dados">
              <p style="color: white">Marcos André De Andrade Amaro</p>
              <p>annndre2016@gmail.com</p>
              <p>Gestor Geral</p>
            </div>
          </div>
          <ul class="navbar-nav">
            <div class="nav-section">
              <li class="nav-item d-flex justify-content-start">
                <i class="bi bi-clipboard"></i>
                <a class="nav-link" aria-current="page" href="#" @click="irParaChamados">Chamados</a>
              </li>
              <li class="nav-item d-flex justify-content-start">
                <i class="bi bi-graph-up-arrow"></i>
                <a class="nav-link" aria-current="page" href="#">Relatórios</a>
              </li>
            </div>
            <li class="nav-item d-flex justify-content-start">
              <i class="bi bi-person-lock"></i>
              <a class="nav-link" aria-current="page" href="#">Alterar Senha</a>
            </li>
            <li class="nav-item d-flex justify-content-start">
              <i class="bi bi-info-circle-fill"></i>
              <a class="nav-link" href="#" @click="abrirSobre">Sobre</a>
            </li>
            <li class="nav-item d-flex justify-content-start">
              <i class="bi bi-door-open-fill"></i>
              <a class="nav-link" href="#" @click="sair">Sair</a>
            </li>
          </ul>
        </div>
        <span>Versão 1.0.0</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "GCompNavBar",
  methods: {
    abrirSobre() {
      this.$router.push("/gestor/sobre");
    },
    irParaChamados() {
      this.$router.push("/gestor/chamados/pendentes");
    }
    // async sair(){
    //   const servico = new ApiRequester();
    //   try {
    //     await servico.sair();
    //     this.$router.push("/chamados");
    //   } catch (error: any) {
    //     const mensagem = error.response
    //       ? error.response.data.message
    //       : "Erro desconhecido";
    //     this.$notify({
    //       title: mensagem,
    //       type: "error",
    //     });
    //   }
    // }
  },
};
</script>

<style scoped>
.background {
  background-color: #555450;
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
  color: rgb(255, 255, 255);
  --bs-bg-opacity: 0;
  background-color: #555450;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
}
.btn-close {
  filter: invert(1);
}
.offcanvas {
  max-width: 70%;
}
.nav-item {
  align-items: center;
  gap: 8px;
}
.nav-item {
  color: #d9d9d9;
}
.nav-link {
  color: #ffffff;
}
.dados p {
  margin-top: 20px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 4px;
  text-align: center;
}
.user {
  display: flex;
  color: #d9d9d9;
  border-bottom: solid 1px #d9d9d9;
  padding-bottom: 10px;
  border-width: 100%;
  flex-direction: column;
  align-items: center;
}
.nav-section {
  border-bottom: solid 1px #d9d9d9;
  border-width: 100%;
  margin-bottom: 10px;
}
.offcanvas-body {
  gap: 30px;
}
.user img {
  border-radius: 50%;
  background-color: white;
}
span {
  font-family: Poppins;
  font-size: 13px;
  font-weight: 275;
  line-height: 35px;
  text-align: center;
  margin-bottom: 40px;
}
</style>
