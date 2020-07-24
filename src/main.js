import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'default-passive-events'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import components from './js/index.js';
components.forEach(item=>{
  Vue.use(item);
})

import './css/common.css'
import './css/main.css'

import './api'


Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  render: h => h(App)
});
vue.$mount('#app')
