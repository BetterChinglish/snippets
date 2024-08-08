import React, { useState } from 'react'
import { data as settingData, DataType } from '@renderer/data'

export default function Result(): React.JSX.Element {
  const [data, setData] = useState(settingData)

  return (
    <>
      <main className="bg-slate-50">
        {
          data.map(item => (
            <div key={item.id}>
              {item.content}
            </div>
          ))
        }
      </main>
    </>
  )
}
