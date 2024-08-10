import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { DataType } from '@renderer/data'
import { data as settingData } from '@renderer/data'

export interface ContextProps {
  // 数据源
  dataSource: DataType[]
  setDataSource: Dispatch<SetStateAction<DataType[]>>
  // 显示数据
  dataList: DataType[]
  setDataList: Dispatch<SetStateAction<DataType[]>>
  // 搜索数据
  searchedValue: string
  setSearchedValue: Dispatch<SetStateAction<string>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}
export const CoderProvider = ({children}: ProviderProps) => {
  const [dataSource, setDataSource] = useState(settingData)
  const [dataList, setDataList] = useState<DataType[]>([])
  const [searchedValue, setSearchedValue] = useState<string>('')
  return <CodeContext.Provider
    value={{
      dataSource,
      setDataSource,
      dataList,
      setDataList,
      searchedValue,
      setSearchedValue
    }}
  >
    {children}
  </CodeContext.Provider>
}
