import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cards from '@/components/Cards'
import Collections from '@/components/Collections'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    }
]
})


export default router