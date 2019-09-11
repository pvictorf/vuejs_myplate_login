const routes = [
  {
    path:'/',
    component: () => import('pages/Home.vue'),
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
    component: () => import('pages/login/Login.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }  
  },
  {
    path: '/login/cadastro',
    component: () => import('pages/login/LoginCadastro.vue'), 
  },
  {
    path: '/login/cadsucesso',
    component: () => import('pages/login/LoginCadSucesso.vue'),
    props: true,
  },
  /*
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  */
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
