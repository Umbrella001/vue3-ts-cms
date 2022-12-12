import type { App } from 'vue'
import { UserFilled, Iphone } from '@element-plus/icons-vue'

const Icons = [UserFilled, Iphone]
export default function registerElementIcons(app: App): void {
  for (const ele of Icons) {
    app.component(ele.name, ele)
  }
}
