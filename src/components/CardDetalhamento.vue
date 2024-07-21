<template>
  <div class="tabela">
    <table>
      <thead class="head">
        <tr>
          <th rowspan="2" class="icon">
            <i class="bi bi-person-bounding-box"></i>
          </th>
          <th class="titulo">Solicitante</th>
        </tr>
        <tr>
          <td class="subtitulo">Tatiane Simplício</td>
        </tr>
        <tr>
          <th rowspan="2" class="icon">
            <i class="bi bi-house-door"></i>
          </th>
          <th class="titulo">Setor</th>
        </tr>
        <tr>
          <td class="subtitulo">Centro de Transformação</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="opcoes">
            <div class="opcoes-content">
              <i class="bi bi-ticket-perforated"></i>
              <span><strong>00029</strong></span>
            </div>
          </td>
          <td class="opcoes">
            <div class="opcoes-content">
              <i class="bi bi-calendar-event"></i>
              <span>Há 2 dias</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="opcoes">
            <div class="opcoes-content">
              <i class="bi bi-building-fill-gear"></i>
              <span>Manutenção</span>
            </div>
          </td>
          <td class="opcoes">
            <div class="opcoes-content">
              <i class="bi bi-exclamation-diamond"></i>
              <span>Baixa</span>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="2" class="descricao">Descrição</th>
        </tr>
        <tr>
          <td colspan="2" class="text">
            <span>Solicito à equipe de serviços a fixação do suporte da TV na sala do saber 1.</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardDetalhamento",
};
</script>

<style scoped>
.tabela {
  background: #f2f3f5;
  border-radius: 5px;
  border: none;
  padding: 20px 10px;
  max-width: 330px;
  height: auto;
  margin: 20px auto;
}

.head::after {
  content: "";
  display: block;
  margin-bottom: 14px;
}

.titulo {
  font-weight: 700;
  font-size: 16px;
  text-align: left;
}

.descricao {
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  padding: 14px 0px;
}

.subtitulo {
  font-weight: 700;
  font-size: 11px;
  text-align: left;
  color: #767575;
}

span {
  font-family: Poppins;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: left;
  color: #767575;
  padding: 2px;
}

th,
td {
  align-content: center;
}

.icon {
  text-align: right;
}

.icon > i {
  font-size: 30px;
  margin-right: 20px;
}

.opcoes {
  padding: 6px 0px;
}

.opcoes-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0px -40px 0px 40px;
}

.text {
  border: #767575 2px solid;
  padding: 30px 10px;
}
</style>
