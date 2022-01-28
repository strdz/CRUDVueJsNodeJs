<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Receita</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">

          <div class="form-group">
            <label class="font-weight-bold">Titulo da receita</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              placeholder="Nome da Receita"
              v-model="receitaForm.nome"
              :class="{
                'is-invalid': isSubmitted && $v.receitaForm.nome.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.receitaForm.nome.required"
              class="invalid-feedback"
            >
              'Nome da Receita' é obrigatorio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Tempo de Preparo</label>
            <input
              type="number"
              id="tempo_preparo"
              name="tempo_preparo"
              class="form-control"
              placeholder=""
              v-model="receitaForm.tempo_preparo"
              :class="{
                'is-invalid': isSubmitted && $v.receitaForm.tempo_preparo.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.receitaForm.tempo_preparo.required"
              class="invalid-feedback"
            >
              'Tempo de preparo'  é obrigatorio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Porções</label>
            <input
              type="number"
              id="porcao"
              name="porcao"
              class="form-control"
              placeholder="Qnt de Porções"
              v-model="receitaForm.porcao"
              :class="{
                'is-invalid': isSubmitted && $v.receitaForm.porcao.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.receitaForm.porcao.required"
              class="invalid-feedback"
            >
              'Porcao' é obrigatorio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Modo de Preparo</label>
            <input
              type="text"
              id="modo_preparo"
              name="modo_preparo"
              class="form-control"
              placeholder=""
              v-model="receitaForm.modo_preparo"
              :class="{
                'is-invalid': isSubmitted && $v.receitaForm.modo_preparo.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.receitaForm.modo_preparo.required"
              class="invalid-feedback"
            >
              'Modo de Preparo' é obrigatorio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Ingredientes</label>
            <input
              type="text"
              id="ingredientes"
              name="ingredientes"
              class="form-control"
              placeholder=""
              v-model="receitaForm.ingredientes"
              :class="{
                'is-invalid':
                  isSubmitted && $v.receitaForm.ingredientes.$error,
              }"
            />
            <div
              v-if="
                isSubmitted && !$v.receitaForm.ingredientes.required
              "
              class="invalid-feedback"
            >
              'ingredientes' é obrigatorio!
            </div>
          </div>

          <div class="form-group">
            <button @click="submitNewReceita" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Gravar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CriarReceita.js"></script>

<style src="" scoped></style>
