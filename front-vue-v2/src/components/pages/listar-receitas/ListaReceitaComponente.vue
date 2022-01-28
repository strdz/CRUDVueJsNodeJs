<template>
  <div>
    <h3 class="text-center">Lista Receitas</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Titulo / Nome</th>
          <th class="text-center">Tempo preparo</th>
          <th class="text-center">Porcoes</th>
          <th class="text-center">Modo Preparo</th>
          <th class="text-center">Ingredientes</th>
          <th class="text-center">Data</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="receita in receitas" :key="receita.id">
          <td>{{ receita.nome }}</td>
          <td>{{ receita.tempo_preparo }}</td>
          <td>{{ receita.porcao }}</td>
          <td>{{ receita.modo_preparo }}</td>
          <td>{{ receita.ingredientes }}</td>
          <td>{{ receita.data }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: receita.id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']" /> Edit
            </router-link>
          </td>
          <td>
            <button @click="removeReceita(receita.id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListaReceita.js"></script>

<style src="" scoped></style>
