import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'

import 'normalize.css'

import rootApp from './App.vue'
import globalRegister from './global'
import { setupStore } from '@/store'

const app = createApp(rootApp)

setupStore()
// registerApp(app)
// 优雅写法
app.use(globalRegister)

app.use(router).use(store).mount('#app')

console.log(process.env.VUE_APP_BASE_URL, '全局配置的文件>>>')
