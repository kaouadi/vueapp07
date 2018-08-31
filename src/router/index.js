import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cards from '@/components/Cards'
import Collections from '@/components/Collections'
import Modals from '@/components/Modals'
import Welcome from "@/components/Welcome";


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
    },
    {
      path: '/modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    }
]
})


export default router