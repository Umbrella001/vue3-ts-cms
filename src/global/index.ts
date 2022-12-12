import type { App } from 'vue'
import registerElement from './register-element'
import registerElementIcons from './register-element-icon'

export default function globalRegister(app: App): void {
  // registerElement(app)

  // 当然也可以使用插件的方式，只要你传入的是一个函数，就会将app作为函数的参数传给你，亦或者写一个对象，里面实现install方法
  app.use(registerElement)

  // 按需引入SVG @element-plus/icons-vue
  app.use(registerElementIcons)
}

// 封装思想：对于继承外部插件时，尽量抽离出来，尽可能让main.ts 文件，干净整洁
