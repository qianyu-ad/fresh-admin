import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { getToken } from '@/utils/token'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

const whiteList = ['login']

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    if (whiteList.indexOf(to.name) !== -1) {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.name) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

export default router
