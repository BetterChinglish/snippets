# snippets

## TODOS
> tailwind安装与环境配置：ok
>
> 使用win-state记忆窗口位置：ok
>
> 添加搜索框与样式设置：ok
>
> 添加数据列表：ok
>
> 使用context共享数据,提供源数据、显示数据、选中数据、搜索内容及他们的设置对象（useState）：ok
>
> 用户输入内容与搜索内容对象绑定：ok
>
> 搜索内容变化时，更新显示数据即搜索到的内容；特殊情况处理：ok
>
> 添加搜索结果组件，显示数据对象.map遍历生成结果；并设置样式：ok
>
> 捕获方向键上下事件，选中数据对象更新，并给对应的显示结果添加类和单独的样式：ok
>
> 捕获回车事件，选中数据对象复制到剪贴板：ok
>
> 点击事件复制：ok
>
> 使用context共享数据的provider封装：ok
>
> 复制之后关闭窗口ipc通信：ok
>
>窗口封装：ok
>
>全局快捷键，按下显示窗口：ok
>
> 显示窗口后仍是上次搜索结果，置空处理---dataList、searchedValue：ok
>
> 复制后再隐藏窗口，避免异步引起问题：ok
>
> 使用redux修改项目
>
> 使用图标库，搜索框开头左侧加个设置按钮的图标
>
> 字体图标与文字对齐
>
> 点击设置图标事件，后续改为点击跳转配置窗口
>
> 使用组件库AntDesign,在vite中使用: npm i antd --save
>
> 注册快捷键失败使用antd组件alert
>
> search组件的input改为antd的input并添加autoFocus自动获取焦点
>
> 设置鼠标穿透
> > mainWindow.setIgnoreMouseEvents(true, { forward: true })
> >
> > 当focus到我们要显示的元素上的时候,关闭穿透
> >
> > 否则开启穿透

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
