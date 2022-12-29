import { Module } from 'vuex'
import { RootType } from '@/store/type'
import { ISystemStore } from './type'
import { getPageListData } from '@/service/main/system/system'

const systemStore: Module<ISystemStore, RootType> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, list: any[]) {
      state.userList = list
    },
    changeUserCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const Result = await getPageListData(payload.url, payload.data)
      const { list, totalCount } = Result.data

      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemStore
