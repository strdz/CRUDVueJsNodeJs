<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update Receita</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="atualizaReceita()">

          <div class="form-group">
            <label class="font-weight-bold">Titulo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              v-model="receitaForm.nome"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Tempo Preparo</label>
            <input
              type="number"
              id="tempo_preparo"
              name="tempo_preparo"
              class="form-control"
              v-model="receitaForm.tempo_preparo"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Porcoes</label>
            <input
              type="number"
              id="porcao"
              name="porcao"
              class="form-control"
              v-model="receitaForm.porcao"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Modo Preparo</label>
            <input
              type="text"
              id="modo_preparo"
              name="modo_preparo"
              class="form-control"
              v-model="receitaForm.modo_preparo"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Ingredientes</label>
            <input
              type="text"
              id="ingredientes"
              name="ingredientes"
              class="form-control"
              v-model="receitaForm.ingredientes"
            >
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditaReceita.js"></script>

<style src="" scoped></style>
