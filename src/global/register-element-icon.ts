import type { App } from 'vue'
// import {
//   UserFilled,
//   Iphone,
//   Setting,
//   Goods,
//   ChatLineRound,
//   Monitor,
//   Expand,
//   Fold,
//   ArrowDown,
//   SwitchButton,
//   Avatar
// } from '@element-plus/icons-vue'

// const Icons = [
//   UserFilled,
//   Iphone,
//   Setting,
//   Goods,
//   ChatLineRound,
//   Monitor,
//   Expand,
//   Fold,
//   ArrowDown,
//   SwitchButton,
//   Avatar
// ]

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function registerElementIcons(app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
