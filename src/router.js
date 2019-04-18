import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import(/* webpackChunkName: "about" */ './components/Pie.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import(/* webpackChunkName: "about" */ './components/Bar.vue')
    },
    {
      path: '/line',
      name: 'line',
      component: () => import(/* webpackChunkName: "about" */ './components/LineChart.vue')
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: () => import(/* webpackChunkName: "about" */ './components/Gauge.vue')
    },
    {
      path: '/gaugeLine',
      name: 'gaugeLine',
      component: () => import(/* webpackChunkName: "about" */ './components/GaugeLine.vue')
    },
    {
      path: '/funnel',
      name: 'funnel',
      component: () => import(/* webpackChunkName: "about" */ './components/Funnel.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "about" */ './components/Map.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
