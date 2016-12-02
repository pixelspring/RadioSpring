import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'

Vue.use(Electron)
Vue.use(Resource)
Vue.config.debug = true

import App from './App'
import store from './store/store'

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
