import React from 'react'

export default function Search(): React.JSX.Element {
  return (
    <div className="bg-slate-50 p-5 drag">
      <section className="bg-slate-100 p-3">
        <input type="text" className="w-full outline-none text-2xl text-slate-600" />
      </section>
    </div>
  )
}
