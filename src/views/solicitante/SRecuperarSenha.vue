<template>
  <notifications />
  <div class="background">
    <SCompNavTabs text="VOLTAR" @click="back"/>
    <div class="card login-component">
      <h2 class="text-body-secondary">REDEFINIÇÃO DE SENHA</h2>
      <img src="../../assets/imagens/esquecisenha.png" alt="Imagem de um Cadeado" />
      <span>Informe o e-mail para o qual deseja redefinir a sua senha.</span>
      <Form>
        <div class="input-group flex-nowrap">
          <Field
            v-model="username"
            class="form-control"
            name="email"
            type="email"
            rules="required|email"
            placeholder="Email"
          />
        </div>
        <div>
          <SCompBotao text="Redefinir Senha" class="senha" />
        </div>
        <div class="redefinir-senha">
          <a href="#" @click="back">Voltar ao login</a>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Form, Field } from "vee-validate";
import SCompBotao from "@/components/solicitante/SCompBotao.vue";
import SCompNavTabs from "@/components/solicitante/SCompNavTabs.vue";

export default {
  name: "SRecuperarSenha",
  components: {
    Form,
    Field,
    SCompBotao,
    SCompNavTabs
  },
  methods: {
    back() {
      this.$router.push("/solicitante/login");
    },
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style scoped>
.login-component {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 54px;
  align-items: center;
  height: 100%;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.login-component img {
  width: 216px;
  height: 167px;
}

.login-component span {
  color: #212529;
  font-family: Poppins;
  font-size: 19px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.1em;
  text-align: center;
}

input {
  box-shadow: 0px 1px 2px 0px #0000000d;
  height: 48px;
}

.background {
  background-color: #6ea8fe;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0px;
  flex-direction: column;
}

h2 {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.senha {
  background-color: #f18b11;
  color: white;
}

.redefinir-senha a {
  color: #0d6efd;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
}
</style>
