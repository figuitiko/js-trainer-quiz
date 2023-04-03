import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './header/Header'



const LayoutAuth = () => {
  return (
    <div className='grid grid-rows-[100px_minmax(400px,_100vh)] grid-cols-[150px_minmax(600px,_100vw)] gap-x-px '>
      <Header />
    <Sidebar />
      <Main />
    </div>

  )
}

export default LayoutAuth