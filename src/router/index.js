import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: Contact
    }
  ]
})
