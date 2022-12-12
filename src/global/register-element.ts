import type { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElForm,
  ElSelect,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElFormItem,
  ElLink,
  ElCheckbox
} from 'element-plus'

import 'element-plus/dist/index.css'

const elementCompose = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElLink,
  ElCheckbox
]

export default function registerElement(app: App): void {
  for (const ele of elementCompose) {
    app.component(ele.name, ele)
  }
}

// 集成elementplus 按需引入的配置写法，并且注册为全局组件，这样不需要再各自的组件中再引入一次
