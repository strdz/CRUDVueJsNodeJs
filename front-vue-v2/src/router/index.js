import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/criar-receita/CriarReceitaComponente'),
  },
  {
    path: '/listaReceitas',
    name: 'list',
    component: () => import('../components/pages/listar-receitas/ListaReceitaComponente'),
  },
  {
    path: '/edita-receita/:id',
    name: 'update',
    component: () => import('../components/pages/edita-receita/EditaReceitaComponente'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/pages/usuario-control/UsuarioComponent'),
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../components/pages/usuario-control/RegistroComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
