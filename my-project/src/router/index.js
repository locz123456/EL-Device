import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Customer from '@/views/Customer/Index'
import Products from '@/views/Products/Index'
import Category from '@/views/Category/Index'
import Supplier from '@/views/Supplier/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/supplier',
      name: 'Supplier',
      component: Supplier
    },
  ]
})
