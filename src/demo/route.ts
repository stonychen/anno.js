import { importRoutes } from '@/app/utils/import-routes';
import uuid from '@/app/utils/uuid'

const children = importRoutes(
  require.context('.', true, /\.page.tsx$/i, 'sync')
)

// push demo home page if it is under demo layout
children.push({
  path: '/',
  component: () => import( /* webpackChunkName: "demo" */ './home'),
  name: uuid(),
})

export const routes = {
  path: 'demo',
  component: () => import( /* webpackChunkName: "demo" */ './layout'),
  name: uuid(),
  children
}

export const globalRoutes: RouteConfig[] = []

// push pages here if we don't need any layout
// globalRoutes.push({
//   path: '/demo/about',
//   component: () => import( /* webpackChunkName: "demo" */ './about'),
//   name: uuid(),
// })
