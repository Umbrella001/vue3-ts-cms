import { LoginType } from './login/type'

export interface RootType {
  name: string
}

// 其他模块直接加载这边就会可以很好的提示
export interface IRootWithModule {
  loginStore: LoginType
}

export type IStoreType = RootType & IRootWithModule
