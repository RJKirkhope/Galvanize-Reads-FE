import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import Authors from '@/pages/Authors'
import Books from '@/pages/Books'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    }
  ]
})
