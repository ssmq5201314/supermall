import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/views/home/Home'
import category from '@/views/category/category'
import shopcart from '@/views/shopcart/shopcart'
import profile from '@/views/profile/profile'

const routes = [{
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    component: profile
  },
]

const router = new VueRouter({
  routes
  // mode:'history'
})

export default router