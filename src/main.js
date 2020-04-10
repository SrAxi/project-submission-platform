import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router'
import vuetify from './plugins/vuetify';
import App from './App.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
