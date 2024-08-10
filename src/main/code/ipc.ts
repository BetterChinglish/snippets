import { BrowserWindow, ipcMain } from 'electron'

export const registerIpcListener = (win: BrowserWindow): void => {
  ipcMain.on('hideWindow', () => {
    win?.hide()
  })
}
