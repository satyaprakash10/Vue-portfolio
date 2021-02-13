import Vue from 'vue'
import VueRouter from 'vue-router'
import TheSiteLayout from './assets/views/layouts/TheSiteLayout.vue'

// Store //
// import store from './store/index.js'

// Views //
import Home from './assets/views/Home.vue'
import About from './assets/views/About.vue'
import Demo from './assets/views/Demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TheSiteLayout,
    // meta: { redirectIfAuthenticated: true },
    children: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/demo',
        component: Demo,
      },
    ],
  },

  //  DEFAULT ROUTE
  //   { path: '*', component: NotFoundPage },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

export default router
