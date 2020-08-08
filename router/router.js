import Vue from 'vue'
import Router from 'vue-router'

import manger from '../src/views/manager/shopMall.vue'
import Login from '../src/views/manager/Login.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path: "/",
            redirect: "login"
          }, 
          //最初重定向的网页
          //路由重定向入口，用于配置多个vue组件模板
      
        {
            path:'/manage',
            name:'manager',
            component:manger
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
       
    ]
})