import { RouteRecordRaw } from 'vue-router'
import { IUserMenuType, Child } from '@/store/login/type'

export function mapMenusToRoutes(userMenus: IUserMenuType[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 加载mian中的所有路由
  const allRoutes: RouteRecordRaw[] = []

  // 1.1 使用webpack提供的commonJSAPI，拿到一参路径下的文件，二参是是否递归查询文件，三是查找的文件范围正则
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    // console.log('routerFiles-key', key)
    const route = require('../router/main' + key.substring(1))
    allRoutes.push(route.default)
  })

  console.log(allRoutes, userMenus)

  // 2. 根据userMenus匹配对应的权限路由
  const loopGetRoute = (menus: IUserMenuType[] | Child[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        route && routes.push(route)
      } else {
        loopGetRoute(menu.children)
      }
    }
  }
  loopGetRoute(userMenus)

  return routes
}

export function mapPathToMenu(userMenus: IUserMenuType[] | Child[], path: string) {
  for (const menu of userMenus) {
    if (menu.children) {
      for (const submenu of menu.children) {
        if (path === submenu.url) return submenu
      }
    }
  }
}
