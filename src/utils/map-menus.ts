import { RouteRecordRaw } from 'vue-router'
import { IUserMenuType, Child } from '@/store/login/type'
import { IBreakCrumbs } from '@/base-ui/breadcrumb'

let firstMenu: any = null

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

        // 记录第一个菜单信息
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        loopGetRoute(menu.children)
      }
    }
  }
  loopGetRoute(userMenus)

  return routes
}

export function mapPathToMenu(
  userMenus: IUserMenuType[] | Child[],
  path: string,
  breakcrumbs?: IBreakCrumbs[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = mapPathToMenu(menu.children ?? [], path)
      if (findMenu) {
        breakcrumbs?.push({ name: menu.name, path: findMenu.url })
        breakcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

export function mapPathBreakcrumb(userMenus: IUserMenuType[] | Child[], path: string) {
  const breakcrumbs: IBreakCrumbs[] = []

  mapPathToMenu(userMenus, path, breakcrumbs)

  return breakcrumbs
}

export { firstMenu }
