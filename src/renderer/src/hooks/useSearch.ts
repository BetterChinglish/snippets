import useSettingCode from './useSettingCode';

const useSearch = () => {
  const { searchedValue, setSearchedValue, dataSource, setDataList } = useSettingCode()

  const handleSearchedChange = (e): void => {
    setSearchedValue(e.target.value)
    // 搜索
    const reg = new RegExp(e.target.value.toLowerCase(), 'i')
    const result = dataSource.filter((item) => {
      return reg.test(item.content.toLowerCase())
    })
    setDataList(result)
    // 搜索值为空时，清空数据
    if (e.target.value !== '') {
      return
    }
    setDataList([])
  }

  return {
    searchedValue,
    handleSearchedChange
  }
}

export default useSearch;
