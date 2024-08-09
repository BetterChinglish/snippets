import Search from '@renderer/components/Search'
import Result from './components/Result'
import { CodeContext } from './context/CodeContext'
import { useState } from 'react'
import { data as settingData } from '@renderer/data'
import { DataType } from './data'

function App(): JSX.Element {
  const [dataSource, setDataSource] = useState(settingData)
  const [dataList, setDataList] = useState<DataType[]>([])
  const [searchedValue, setSearchedValue] = useState<string>('')
  return (
    <CodeContext.Provider
      value={{
        dataSource,
        setDataSource,
        dataList,
        setDataList,
        searchedValue,
        setSearchedValue
      }}
    >
      <Search />
      <Result />
    </CodeContext.Provider>
  );
}

export default App
