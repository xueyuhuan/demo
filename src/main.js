import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import '@/assets/scss/all.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
