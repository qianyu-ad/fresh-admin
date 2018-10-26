import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { getToken } from '../utils/token'
// import { getToken } from '@/utils/token'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   const token = getToken()
//   if (token) {
//     next()
//   } else {
//     next({ name: 'login' })
//   }
// })

export default router
