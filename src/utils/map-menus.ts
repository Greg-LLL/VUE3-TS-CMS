import type { RouteRecordRaw } from 'vue-router'

// 加载本地路由
function loadLocalRoutes() {
  // 动态获取所有的路由对象,放到数组中
  // 路由对象都在独立的文件中
  // 从文件中将所有的路由对象先读取数组中
  const localRoutes: RouteRecordRaw[] = []
  // 读取router/main当中所有的ts文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  )
  // 将加载的对象放到localRoutes里面
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}

export function mapMenusToRoutes(userMenus: any[]) {
  // 加载本地路由
  const localRoutes = loadLocalRoutes()

  // 根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) routes.push(route)
    }
  }
  return routes
}