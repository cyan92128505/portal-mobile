import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Account from './views/Account.vue';
import NotFound from './views/NotFound.vue';
import mobileIndex from './components/mobile-index.vue';
import themeIndex from './components/Theme-index.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('./views/Wallet.vue')
    },
    {
      path: '/promotion',
      name: 'promotion',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Promotion.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        //requiredLogin: true
      }
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/mobileIndex',
      name: 'mobileIndex',
      component: mobileIndex
    },
    {
      path: '/themeIndex',
      name: 'themeIndex',
      component: themeIndex
    }
  ]
});
