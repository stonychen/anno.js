import VueRouter from 'vue-router'
import { Component, Vue } from 'vue-property-decorator'
import uuid from '@/app/utils/uuid'
import { routes as demoRoute, globalRoutes as demoGlobal } from '@/demo/route'

const routes = []

routes.push({
  path: '*',
  component: () => import( /* webpackChunkName: "app/pages" */ './pages/404'),
  name: uuid()
})

routes.push({
  path: '/',
  component: () => import( /* webpackChunkName: "app/pages" */ './layout'),
  name: uuid(),
  children: [
    demoRoute,
    {
      path: '/',
      component: () => import( /* webpackChunkName: "app/pages" */ '@/home'),
      name: uuid()
    }
    // Push your pages here if with a default layout
  ]
})

// Push your pages here if without a default layout or using other layout
routes.push(...demoGlobal)
const router = new VueRouter({ routes })

console.log(routes)

Vue.use(VueRouter)

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])
router.beforeEach((from, to, next) => {
  //console.log(to);
  next()
})

router.onReady(() => {
  console.log('VueRouter onReady')
}, err => {
  console.log('VueRouter onReady with error ', err)
})

router.onError(err => {
  console.log('router onError ', err)
})

export default router
