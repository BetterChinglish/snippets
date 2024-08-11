import { app, BrowserWindow, globalShortcut } from 'electron';

const hasRegistered = new Set<string>();

const toRegister = (shortcut: string, callback: () => void): boolean => {
  const ret = globalShortcut.register(shortcut, callback);
  if(!ret) {
    console.log(`快捷键${shortcut}注册失败！`);
    return ret;
  }
  hasRegistered.add(shortcut);
  console.log(shortcut, globalShortcut.isRegistered(shortcut));
  return ret;
}

export const registerShowWindowShortcut = (win: BrowserWindow): void => {
  app.whenReady().then(() => {
    toRegister('CommandOrControl+Shift+;', () => {
      if(win.isVisible()) {
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
  })

  app.on('will-quit', () => {
    [...hasRegistered].forEach((shortcut) => {
      globalShortcut.unregister(shortcut);
    })
    hasRegistered.clear();
    globalShortcut.unregisterAll()
  })
}

