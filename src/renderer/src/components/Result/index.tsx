import React from 'react';
import classNames from 'classnames'
import './styles.scss'
import useCodeSelect from '../../hooks/useCodeSelect';

export default function Result(): React.JSX.Element {
  const { dataList, selectedIndex, copyContent } = useCodeSelect();

  return (
    <>
      <main className="bg-slate-50 pl-6 pr-6 overflow-ellipsis whitespace-nowrap">
        {dataList.sort((a, b) => a.id - b.id).map((item, index) => {
          const isSelected = selectedIndex === index;
          return (<div key={item.id}>
            <div
              onClick={() => {copyContent(index)}}
              className={classNames("overflow-ellipsis overflow-hidden mb-3 cursor-pointer rounded pl-1 pr-1", { 'choosed': isSelected})}
            >
              {index + 1} : {item.content}
            </div>
            <div className={classNames('text-slate-600 w-full', {'selected-content': isSelected, 'no-selected-hidden': !isSelected})}>
              {item.content}
            </div>
          </div>)
        })}
      </main>
    </>
  )
}
