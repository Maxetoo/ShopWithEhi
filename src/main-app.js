import React from 'react'
import './Stylings/main.css'
import FirstPage from './First-page/Firstpage'
import MainPage from './Main-page/Main-page'
import { useGlobalContext } from './context'

const MainApp = () => {
  const { pageSlider } = useGlobalContext()
  return (
    <main className='main-app'>
      {pageSlider ? <MainPage /> : <FirstPage />}
    </main>
  )
}

export default MainApp
