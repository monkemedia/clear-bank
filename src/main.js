// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { VueExtendLayout, layout } from 'vue-extend-layout'
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import store from './store'
import Filters from './filters/_all'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.styl'

Vue.use(Vuex)
Vue.use(ElementUI, { locale })
Vue.use(VueExtendLayout)
Vue.use(Filters)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout,
  store
})
