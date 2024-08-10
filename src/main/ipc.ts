import { BrowserWindow, ipcMain } from 'electron';


ipcMain.on('hideWindow', (event) => {
  const win = BrowserWindow.fromWebContents((event.sender));
  win?.hide();
})
