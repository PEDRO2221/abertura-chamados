<template>
  <div class="background">
    <div class="header">
      <notifications />
      <img src="../../assets/logo-amigos.png" alt="logo amigos" />
    </div>
    <div class="card login-component">
      <h2 class="text-body-secondary">Abertura de Chamados</h2>
      <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
        <div class="input-group flex-nowrap">
          <Field
            v-model="email"
            class="form-control"
            name="email"
            type="email"
            rules="required|email"
            placeholder="Email"
          />
        </div>
        <div class="input-group flex-nowrap">
          <input
            class="form-control"
            type="password"
            v-model="password"
            required
            placeholder="Senha"
          />
        </div>
        <div>
          <GCompBotao text="ENTRAR" class="login" />
        </div>
        <div class="redefinir-senha">
          <a href="#" @click="abrirEsqueceSenha">Esqueceu a senha?</a>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Form, Field } from "vee-validate";
import GCompBotao from "@/components/gestor/GCompBotao.vue";
import ApiRequester from "../../services/ApiRequester";

export default {
  name: "GLogin",
  components: {
    Form,
    Field,
    GCompBotao,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values: any) {
      const servico = new ApiRequester();
      try {
        const token = await servico.autenticarGestor(this.email, this.password);
        console.log(token);
        this.$router.push("/gestor/chamados");
      } catch (error: any) {
        const mensagem = error.response
          ? error.response.data.message
          : "Erro desconhecido";
        this.$notify({
          title: mensagem,
          type: "error",
        });
      }
    },
    abrirEsqueceSenha() {
      this.$router.push("/gestor/racuperar-senha");
    },
    onInvalidSubmit({ values, errors, results }: any) {
      const keys = Object.keys(errors);
      const firstKey = keys[0];
      const firstMessage = errors[firstKey];
      this.$notify({
        title: firstMessage,
        type: "error",
      });

      console.log(errors);
    },
  },
};
</script>

<style scoped>
.login-component {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  height: 65vh;
  border-radius: 12px 12px 0px 0px;
  justify-content: center;
}

input {
  box-shadow: 0px 1px 2px 0px #0000000d;
  height: 48px;
}

.background {
  background-color: #555450;
  display: flex;
  justify-content: center;
  margin: 0px;
  flex-direction: column;
}

h2 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
}

.header {
  width: 100%;
  height: 35vh;
  background-image: url(../../assets/login-gestor.svg);
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header img {
  height: 208px;
  width: 208px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.login {
  background-color: #f18b11;
  color: white;
}

.redefinir-senha a {
  color: #616060;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: center;
}
</style>
