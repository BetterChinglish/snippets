import { createContext, Dispatch, SetStateAction } from 'react'
import { DataType } from '@renderer/data'

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
