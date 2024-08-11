import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const hideWindow = () => {
  ipcRenderer.send('hideWindow');
}

const registerShowWinShortcut = (whichWindow: string, shortcut: string) => {
  ipcRenderer.send('registerShowWinShortcut', whichWindow, shortcut);
}

// Custom APIs for renderer
const api = {
  hideWindow,
  registerShowWinShortcut
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
