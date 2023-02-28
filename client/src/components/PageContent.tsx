import React from 'react'

export default function PageContent({children}:any):JSX.Element {
  return (
    <div className="sm:-mt-14 -mt-10 sm:max-w-7xl w-full mx-auto px-2 z-20">
        {children}
    </div>
  )
}
