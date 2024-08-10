import { app } from 'electron'
import { createWindow } from './window'
import { registerIpcListener } from './ipc'

// whenReady类似document注册事件，当Electron完成初始化并准备创建浏览器窗口时，将调用此方法，可以绑定多个
// 后续处理该窗口的逻辑都在这里处理即可
app.whenReady().then(() => {
  // 创建窗口
  const win = createWindow()
  // 注册事件
  registerIpcListener(win)
})
