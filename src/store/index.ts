import { createStore } from 'vuex'

import { RootType } from './type'
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

export default store
