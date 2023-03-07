import React from 'react'
import { Loader } from 'components'

export default function PageLoader() {
  return (
    <div className='flex flex-row items-center justify-center min-h-screen'>
      <div className='relative'>
        <Loader /><h2>Sahifa yuklanmoqda...</h2>
      </div>
    </div>
  )
}
