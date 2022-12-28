export interface LoginType {
  token: string
  userInfo: any
  userMenus: any
}

export interface Child {
  children: any
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url?: string
}

export interface IUserMenuType {
  children?: Child[]
  icon?: string
  id: number
  name: string
  sort: number
  type: number
  url?: string
}
