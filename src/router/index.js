// 定义路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//声明使用vue插件
Vue.use(VueRouter)

//生成路由器
const router =new VueRouter({
   routes 
})

export default router