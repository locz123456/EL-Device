import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage.vue'
import Product from '@/views/Product.vue'
import Contact from '@/views/Contact.vue'
import Login  from '@/views/Login.vue'
import Find  from '@/views/Find.vue'
import Cart  from '@/views/Cart.vue'
import SignUp  from '@/views/Register.vue'
import ProductDetail  from '@/views/ProductDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product-detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    
  ]
})
