import axiosRequest from '..'

import { AccountType, ILoginResult, IUserInfoResult, IDataType } from './type'

enum LoginApi {
  AccoutLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

// 账号登录请求
export function accountLoginRequest(account: AccountType) {
  return axiosRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccoutLogin,
    data: {
      name: account.account,
      password: account.password
    }
  })
}

// 登录的用户信息
export function userInfoRequest(id: number) {
  return axiosRequest.get<IDataType<IUserInfoResult>>({
    url: LoginApi.LoginUserInfo + id,
    showFetchLoading: false
  })
}

// 获取用户菜单
export function userMenusRequest(id: number) {
  return axiosRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showFetchLoading: false
  })
}
