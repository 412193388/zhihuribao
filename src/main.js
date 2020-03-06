import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import vueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(vueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
