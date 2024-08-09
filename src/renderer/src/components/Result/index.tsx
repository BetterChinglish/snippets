import React, { useContext } from 'react'
import { CodeContext, ContextProps } from '../../context/CodeContext'

export default function Result(): React.JSX.Element {
  const { dataList } = useContext(CodeContext) as ContextProps
  return (
    <>
      <main className="bg-slate-50 pl-6 pr-6 overflow-ellipsis whitespace-nowrap">
        {dataList.map((item, index) => (
          <div key={item.id} className="overflow-ellipsis overflow-hidden mb-3">
            {index + 1} : {item.content}
          </div>
        ))}
      </main>
    </>
  )
}
