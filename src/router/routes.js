
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/Home.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem("_auth")) {
        next({path: '/login'});
      } else {
          next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/Login.vue'),
    beforeEnter: (to, from, next) => {
      next()
      /*if(localStorage.getItem("_auth")) {
        if(confirm("Identificamos seu usuário logado. Deseja ir para tela de login?")) {
          next({path: '/login'});
        }
        next();
      } */
    } 
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('layouts/LoginCadastro.vue'),
  },

/*{
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }*/
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
