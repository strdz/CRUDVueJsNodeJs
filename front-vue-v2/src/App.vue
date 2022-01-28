<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a id="nomeUsuario" class="navbar-brand order-md-last"></a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Criar Novas Receitas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/listaReceitas">Listar Receitas </router-link>
        </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
