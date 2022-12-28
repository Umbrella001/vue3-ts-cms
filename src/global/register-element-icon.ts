import type { App } from 'vue'
import {
  UserFilled,
  Iphone,
  Setting,
  Goods,
  ChatLineRound,
  Monitor,
  Expand,
  Fold,
  ArrowDown,
  SwitchButton,
  Avatar
} from '@element-plus/icons-vue'

const Icons = [
  UserFilled,
  Iphone,
  Setting,
  Goods,
  ChatLineRound,
  Monitor,
  Expand,
  Fold,
  ArrowDown,
  SwitchButton,
  Avatar
]
export default function registerElementIcons(app: App): void {
  for (const ele of Icons) {
    app.component(ele.name, ele)
  }
}
