import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:()=>import('@/views/Index'),
    children:[
      {
        path:'/index/rec',
        component:()=>import('@/views/index/Recommend')
      },
      {
        path:'/index/home',
        component:()=>import('@/views/index/Home')
      },
      {
        path:'/index/zone',
        component:()=>import('@/views/index/Zone')
      },
      {
        path:'/index',
        redirect:'/index/rec'
      }
    ]
  },
  {
    path:'/index/home',
    component:()=>import('@/views/index/Home')
  },
  {
    path:'/index/rec',
    component:()=>import('@/views/index/Recommend')
  },
  {
    path:'/index/zone',
    component:()=>import('@/views/index/Zone')
  },
  {
    path:'/sort',
    component:()=>import('@/views/Sort')
  },
  {
    path:'/message',
    component:()=>import('@/views/Message')
  },
  {
    path:'/shopcar',
    component:()=>import('@/views/Shopcar')
  },
  {
    path:'/center',
    component:()=>import('@/views/Center')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
