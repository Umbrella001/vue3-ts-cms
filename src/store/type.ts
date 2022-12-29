import { LoginType } from './login/type'
import { ISystemStore } from './main/system/type'

export interface RootType {
  name: string
}

// 其他模块直接加载这边就会可以很好的提示
export interface IRootWithModule {
  loginStore: LoginType
  systemStore: ISystemStore
}

export type IStoreType = RootType & IRootWithModule
