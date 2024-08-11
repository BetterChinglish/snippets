import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

const toRegister = (shortcut: string, callback: () => void): boolean => {
  const ret = globalShortcut.register(shortcut, callback);
  console.log(`快捷键注册结果：'${shortcut}'--${ret? '成功': '失败'}`);
  return ret;
}

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

export const registerShowWindowShortcut = (win: BrowserWindow): void => {
  toRegister('CommandOrControl+Shift+;', () => {
    if(win.isVisible()) {
      win.hide();
      return;
    }
    win.show()
  })

  toRegister('Esc', () => {
    if(win.isFullScreen()) {
      win.setFullScreen(false);
      return;
    }
    if(win.isVisible()) {
      win.hide();
      return;
    }
  })

  // TODO: 后续使用公共常量替换字符串
  ipcMain.on('registerShowWinShortcut', (_event, whichWindow: string, shortcut: string) => {
    switch(whichWindow) {
      case 'Search':
        registerSearchWinShortcut(win, shortcut);
        break;
      default:
        break;
    }

  });
}

const registerSearchWinShortcut = (win: BrowserWindow, shortcut: string): void => {
  if(globalShortcut.isRegistered(shortcut)) {
    globalShortcut.unregister(shortcut);
  }
  toRegister(shortcut, () => {
    win.isVisible() ? win.hide() : win.show();
  });
}
