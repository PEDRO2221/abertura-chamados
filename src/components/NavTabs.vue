<template>
  <nav class="navbar bg-body fixed menu">
    <div class="container-fluid d-flex justify-content-start">
      <button class="navbar-brand border-0 bg-body">
        <i class="bi-arrow-left text-white"></i>
      </button>
      <a class="navbar-brand d-flex justify-content-start text-white" href="#"
        >SOLICITAÇÃO CONFIRMADA</a
      >
    </div>
  </nav>
</template>
  
  <script>
export default {
  name: "NavTabs",
  methods: {},
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
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
}
</style>
  