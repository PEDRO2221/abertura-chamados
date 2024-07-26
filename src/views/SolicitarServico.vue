<template>
  <div class="background">
    <NavTabs text="SOLICITAÇÃO DE SERVIÇO" @click="voltar" />
    <div class="main">
      <form action="" method="">
        <div>
          <label for="nome" class="form-label lb">Nome do Solicitante</label>
          <input
            type="text"
            class="form-control"
            id="name"
            value="Tatiane Simplício"
          />
        </div>
        <div>
          <label for="nome" class="form-label lb">Descrição do Reparo</label>
          <div class="form-floating">
            <textarea
              class="form-control descricao"
              placeholder="Descreva o problema"
              id="floatingTextarea"
              style="height: 110px"
            ></textarea>
            <label for="floatingTextarea2">Descreva seu problema</label>
          </div>
        </div>
        <div class="inputs-grandes">
          <label for="data" class="form-label lb">DATA DA SOLICITAÇÃO</label>
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">
              <i class="bi bi-calendar-plus"></i>
            </span>
            <input type="date" class="form-control" placeholder="dd/mm/aaaa" />
          </div>
        </div>
        <div class="inputs-grandes">
          <label for="data" class="form-label lb">IMAGEM DO DEFEITO</label>
          <div class="input-group">
            <span class="input-group-text" id="">
              <i class="bi bi-camera"></i>
            </span>
            <label for="fupload" class="control-label label-bordered"
              >Escolher um arquivo</label
            >
            <input
              type="file"
              id="fupload"
              name="fupload"
              class="form-control"
            />
          </div>
        </div>
        <div>
          <label for="nome" class="form-label lb">NÍVEL DE PRIORIDADE</label>
          <select class="form-select">
            <option selected>Selecionar</option>
            <option value="1">Alta</option>
            <option value="2">Média</option>
            <option value="3">Baixa</option>
          </select>
        </div>
        <div>
          <label for="nome" class="form-label lb">NÍVEL DE PRIORIDADE</label>
          <select class="form-select">
            <option selected>Selecionar</option>
            <option value="1">Alta</option>
            <option value="2">Média</option>
            <option value="3">Baixa</option>
          </select>
        </div>
        <div>
          <label for="nome" class="form-label lb">NÍVEL DE PRIORIDADE</label>
          <select class="form-select">
            <option selected>Selecionar</option>
            <option value="1">Alta</option>
            <option value="2">Média</option>
            <option value="3">Baixa</option>
          </select>
        </div>
        <div class="grup-botao">
          <CompBotao text="Salvar" class="botao" @click="solicitar" />
          <CompBotao text="Voltar" class="botao-voltar" @click.prevent="voltar"/>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script lang="ts">
import CompBotao from "../components/CompBotao.vue";
import NavTabs from "../components/NavTabs.vue";
export default {
  name: "Solicitacao",
  components: {
    CompBotao,
    NavTabs,
  },
  methods: {
    voltar() {
      this.$router.push("/chamados");
    },
    solicitar() {
      this.$router.push("/resumo");
    },
  },
};
</script>
  
<style scoped>
.lb {
  margin: 10px 0px;
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
}
.grup-botao {
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin: 40px 0px;
}
.botao {
  background-color: #f18b11;
  color: #fff;
}
.botao-voltar {
  border: 1px solid #f18b11;
  color: #f18b11;
  background-color: #fff;
}

.descricao {
  width: 327px;
  height: 114px;
  border-radius: 6px;
}
select {
  background: #b4afaf;
  font-size: 14px;
  height: 49px;
}
option {
  font-size: 14px;
  padding: 5px;
  margin: 2px;
  border: 1px solid #ddd;
}
input[type="file"] {
  display: none;
}
.label-bordered {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  width: 287px;
  height: 49px;
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 6px 0px 0px 0px;
}
input.form-control {
  height: 49px;
}
form {
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  border-radius: 12px 12px 0px 0px;
  background-color: white;
  box-shadow: 1px 1px 20px 1px #00000055;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.file-cap {
  width: 270px;
}
.background {
  background-color: #6ea8fe;
  display: flex;
  margin: 0px;
  flex-direction: column;
  justify-content: space-between;
}
</style>
  