import { app, BrowserWindow, globalShortcut } from 'electron';

export const registerShowWindowShortcut = (win: BrowserWindow): void => {
  const toRegister = (shortcut: string, callback: () => void): void => {
    const ret = globalShortcut.register(shortcut, callback);
    if(!ret) {
      console.log(`快捷键${shortcut}注册失败！`);
    }
    console.log(globalShortcut.isRegistered(shortcut));
  }

  app.whenReady().then(() => {
    toRegister('CommandOrControl+X', () => {
      if(win.isVisible()) {
        return;
      }
      win.show()
    })

    toRegister('F12', () => {
      if(win.webContents.isDevToolsOpened()) {
        return;
      }
      win.webContents.openDevTools();
    })
  })

  app.on('will-quit', () => {
    globalShortcut.unregister('CommandOrControl+X');

    globalShortcut.unregisterAll()
  })
}

