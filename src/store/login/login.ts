import { Module } from 'vuex'

import { LoginType } from './type'
import { RootType } from '../type'

import { accountLoginRequest, userInfoRequest, userMenusRequest } from '@/service/login/login'
import { AccountType, IUserInfoResult } from '@/service/login/type'
import { localCache } from '@/utils'
import router from '@/router'

// S为当前模块state的类型，R为根state的类型
const loginStore: Module<LoginType, RootType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeTokenState(state, payload: string) {
      state.token = payload
    },
    changeUserInfoState(state, payload: IUserInfoResult) {
      state.userInfo = payload
    },
    changeUserMenusState(state, payload: any) {
      state.userMenus = payload
    }
  },
  actions: {
    // 处理刷新后state数据重置问题
    setupLocalLogin({ commit }) {
      const token = localCache.get('token')
      token && commit('changeTokenState', token)

      const userInfo = localCache.get('userInfo')
      userInfo && commit('changeUserInfoState', userInfo)

      const userMenus = localCache.get('userMenus')
      userMenus && commit('changeUserMenusState', userMenus)
    },
    async changeLoginAction({ commit }, payload: AccountType) {
      // 1. 登录
      const loginResult = await accountLoginRequest(payload)

      const { id, token } = loginResult.data
      commit('changeTokenState', token)
      localCache.set('token', token)

      // 2. 登录后获取用户信息
      const userInfoResult = await userInfoRequest(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfoState', userInfo)
      localCache.set('userInfo', userInfo)

      // 3. 获取当前登录用户的菜单信息
      const userMenus = await userMenusRequest(userInfo.role.id)
      const menus = userMenus.data
      commit('changeUserMenusState', menus)
      localCache.set('userMenus', menus)

      // 4.跳转到首页
      router.push('/home')
    }
  }
}

export default loginStore
