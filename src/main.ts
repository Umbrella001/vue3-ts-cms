import { createApp } from 'vue'
import globalRegister from './global'

import rootApp from './App.vue'
import router from '@/router'
import store from '@/store'

const app = createApp(rootApp)

// registerApp(app)
// 优雅写法
app.use(globalRegister)

app.use(router).use(store).mount('#app')

console.log(process.env.VUE_APP_BASE_URL, '全局配置的文件>>>')
