import uuid from '@/app/utils/uuid'

export const importRoutes = (requireContext: __WebpackModuleApi.RequireContext,
  mKey ? : string,
  cb ? : (m: any, path: string) => void
) => {
  const children: RouteConfig[] = []

  requireContext.keys().forEach(key => {

    const pathList = key.split('/')
    pathList.pop()
    pathList.shift()
    const path = mKey ? (`${mKey}/${pathList.join('/')}`) : pathList.join('/')

    const route: RouteConfig = {
      path: path,
      name: uuid(),
      component: () => {
        return new Promise((resolve, reject) => {
          resolve(requireContext(key).default)
        })
      }
    }
    children.push(route)
  })
  return children
}
