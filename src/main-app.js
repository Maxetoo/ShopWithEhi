import React from 'react'
import './Stylings/main.css'
import MainPage from './Main-page/Main-page'
import Loading from './Loader/Loading'
import { useGlobalContext } from './context'

const MainApp = () => {
  const { hasLoaded } = useGlobalContext()

  return (
    <main className='main-app'>{hasLoaded ? <MainPage /> : <Loading />}</main>
  )
}

export default MainApp
