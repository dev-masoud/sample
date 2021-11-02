import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    // component: Home
    redirect:"/login"
  },
  {
    path: "/login",
    name:"login",
    component: Login
  },
  {
    path:'/home',
    name:'home',
    component:Home
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
    
export default router
