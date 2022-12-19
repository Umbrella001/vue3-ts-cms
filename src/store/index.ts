import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IStoreType, RootType } from './type'
import loginStore from './login/login'

const store = createStore<RootType>({
  state: () => ({
    name: 'liber'
  }),
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginStore
  }
})

export function setupStore() {
  store.dispatch('loginStore/setupLocalLogin')
}

// 在vuex中写TS（支持检测模块问题）
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
