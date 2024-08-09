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
        >Meus Chamados</a
      >
      <div
        class="offcanvas offcanvas-start"
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
              <span>Marcos André De Andrade Amaro</span>
              <span>annndre2016@gmail.com</span>
            </div>
          </div>
          <ul class="navbar-nav border-top">
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CompNavBar",
  methods: {
    abrirSobre() {
      this.$router.push("/solicitante/sobre");
    },
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
  color: rgb(255, 255, 255);
  --bs-bg-opacity: 0;
  background-color: #6ea8fe;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
}

.offcanvas {
  max-width: 70%;
}
.nav-item {
  align-items: center;
  gap: 5px;
}
.nav-item {
  color: #555450;
}
.dados span {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 35px;
  text-align: center;
}
.user {
  display: flex;
  color: #767575;
  border-bottom: solid 1px #767575b0;
  border-width: 100%;
  flex-direction: column;
  align-items: center;
}
.offcanvas-body {
  gap: 30px;
}
.user img {
  border-radius: 50%;
  background-color: black;
}
</style>
