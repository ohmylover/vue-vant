import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './router.config.js'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
// 2.使用router.beforeEach对路由进行遍历，设置title
router.beforeEach((to, from, next) => {
  // beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    // 判断是否有标题
    document.title = to.meta.title
  } else {
    document.title = 'vue-vant'
  }
  next()
})
export default router
