import { BrowserWindow, shell } from 'electron'
import WinState from 'electron-win-state'
import { is } from '@electron-toolkit/utils'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = WinState.createBrowserWindow({
    width: 700,
    height: 400,
    show: false,
    // frame: false,
    // transparent: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.webContents.openDevTools()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}
