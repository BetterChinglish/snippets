import React, { useCallback, useContext, useEffect } from 'react';
import { CodeContext, ContextProps } from '../context/CodeContext';

const useCodeSelect = () => {
  const { dataList, setSearchedValue, setDataList } = useContext(CodeContext) as ContextProps

  // 当用户修改搜索内容时，如果数据源发生变化，判定搜索出来的数据是否超过当前选择的index，如果没有超过则直接重新选中第一个
  useEffect(() => {
    let updatedIndex = 0;
    if(dataList.length >= selectedIndex) {
      updatedIndex = selectedIndex
    }
    setSelectedIndex(updatedIndex)
  }, [dataList])

  // 默认选中第0个
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  // 监听键盘事件，处理用户上下选择
  const handleKeyUpAndDown = useCallback((e) => {
    console.log('keydown', e)
    const pressedKey = e.key;
    if(dataList.length === 0) {
      return;
    }
    switch (pressedKey) {
      case 'ArrowUp':
        // 到最上面时，再按上键，选中最后一个
        if(selectedIndex === 0) {
          setSelectedIndex(dataList.length - 1);
        } else {
          setSelectedIndex(selectedIndex - 1);
        }
        break;
      case 'ArrowDown':
        // 到最下面时，再按下键，选中第一个
        if (selectedIndex === dataList.length - 1) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex(selectedIndex + 1)
        }
        break;
      case 'Enter':
        copyContent(selectedIndex);
        break;
      default:
        break;
    }
  }, [dataList, selectedIndex])

  const copyContent = async (index: number) => {
    // 回车键，复制选中的内容
    const selectedContent = dataList[index].content;
    // 复制完成后初始化数据并关闭窗口
    await navigator.clipboard.writeText(selectedContent)
    setSelectedIndex(0);
    setSearchedValue('');
    setDataList([]);
    window.api.hideWindow();
  }

  // 绑定键盘事件
  useEffect(()=>{
    document.addEventListener('keydown', handleKeyUpAndDown)

    return () => {
      document.removeEventListener('keydown', handleKeyUpAndDown)
    }
  }, [handleKeyUpAndDown])

  return {
    dataList,
    selectedIndex,
    copyContent
  }
}

export default useCodeSelect;
