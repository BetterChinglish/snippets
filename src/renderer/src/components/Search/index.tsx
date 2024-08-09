import React from 'react'
import useSettingCode from '../../hooks/useSettingCode'

export default function Search(): React.JSX.Element {
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
  return (
    <div className="bg-slate-50 p-5 drag">
      <section className="bg-slate-100 p-3">
        <input
          type="text"
          className="w-full outline-none text-2xl text-slate-600"
          value={searchedValue}
          onChange={handleSearchedChange}
          placeholder="Search something..."
        />
      </section>
      <section className="text-center text-slate-600 text-xs mt-2">
        welcome to use my app
      </section>
    </div>
  )
}
