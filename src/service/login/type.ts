export interface AccountType {
  account: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

interface UserInfoRole {
  id: number
  name: string
  intro: string
  createAt?: Date
  updateAt?: Date
}

interface UserInfoDepartment {
  id: number
  name: string
  parentId?: any
  createAt?: Date
  updateAt?: Date
  leader: string
}

export interface IUserInfoResult {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt?: Date
  updateAt?: Date
  role: UserInfoRole
  department: UserInfoDepartment
}

export interface IDataType<T = any> {
  code: number
  data: T
}
