// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import {store} from './store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)

// event bus for communication purposes
window.Event = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
