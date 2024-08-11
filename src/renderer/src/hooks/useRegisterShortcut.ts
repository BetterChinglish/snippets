export default () => {
  const register = (whichWindow: string = 'Search', shortcut: string = 'CommandOrControl+Shift+;') => {
    window?.api?.registerShowWinShortcut?.(whichWindow, shortcut);
  }
  return {
    register
  }
}
