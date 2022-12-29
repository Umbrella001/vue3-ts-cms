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
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElSubMenu,
  ElMenuItem,
  ElMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElRow,
  ElCol,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElTag
} from 'element-plus'

import 'element-plus/dist/index.css'

const elementCompose = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElTag
]

export default function registerElement(app: App): void {
  for (const ele of elementCompose) {
    app.component(ele.name, ele)
  }
}

// 集成elementplus 按需引入的配置写法，并且注册为全局组件，这样不需要再各自的组件中再引入一次
