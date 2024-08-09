<template>
  <div class="background">
    <div class="main">
      <nav class="navbar">
        <div class="container-fluid">
          <h1 class="navbar-brand">Sobre</h1>
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
        <h2>Startup Do Bem</h2>
        <img
          src="../../assets/imagens/startup.jpeg"
          class="rounded"
          alt="Integrantes da Startup"
        />
        <p class="mt-4">
          <strong>A Startup do Bem</strong> é uma iniciativa inovadora da ONG
          Amigos do Bem, no sertão nordestino. O projeto, composto por 10 jovens
          capacitados em tecnologia, visa desenvolver soluções tecnológicas
          melhorando a infraestrutura e os serviços internos.
        </p>
      </section>
      <section>
        <h3>Descrição</h3>
        <p>
          Este aplicativo facilita a abertura de chamados de serviços internos
          na unidade dos Amigos do Bem no Ceará, melhorando a comunicação e a
          gestão de demandas.
        </p>
        <h3>Parceiros</h3>
        <p>
          O projeto conta com o apoio da ONG Amigos do Bem, que oferece recursos
          e suporte essenciais. Sob a mentoria dos desenvolvedores Vitor
          Siqueira e Danilo, estamos comprometidos em criar um impacto positivo
          na vida das pessoas da região.
        </p>
        <h3>Contato</h3>
        <p>
          Para mais informações, entre em contato pelo e-mail
          <a href="mailto:contato@startupdobem.org">contato@startupdobem.org</a>
        </p>
        <h3>Versão</h3>
        <p class="text-center">Versão 1.0.0</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sobre",
  components: {},
  methods: {
    fecharPagina() {
      this.$router.push("/solicitante/chamados");
    },
  },
};
</script>

<style scoped>
.background {
  display: flex;
  margin: 0px;
  flex-direction: column;
}
h1 {
  font-family: Poppins;
  font-weight: 900;
  font-size: 20px;
  padding: 20px;
}
h2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
}
h3 {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  text-align: center;
}
p {
  font-family: Montserrat;
  font-weight: 500;
  text-align: justify;
  font-size: 12px;
  padding: 0px 20px;
}
img {
  width: 200px;
}
button {
  padding: 20px;
}
</style>
