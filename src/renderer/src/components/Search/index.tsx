import React from 'react'
import useSearch from '../../hooks/useSearch';

export default function Search(): React.JSX.Element {
  const {searchedValue, handleSearchedChange} = useSearch();
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
