import React from 'react'
import Str from '../assets/langs'
import { ButtonMotion, Header, Hero, Motion, PageContent } from '../components'

export default function Main() {
  return (
    <Motion>
      <Header title={Str['main-page']} disc={Str['desc']} />
      <PageContent>
        <div className='bg-white rounded-xl h-24 shadow-md'>
          awdawd
        </div>
        <div className='min-h-screen'>
          awdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawd
        </div>
        <div className='min-h-screen'>
          awdawdawd
        </div>
      </PageContent>

    </Motion>
  )
}
