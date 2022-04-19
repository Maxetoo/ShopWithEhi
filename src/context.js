import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [typeWriter, setTypeWriter] = useState(false)
  const [pageSlider, setPageSlider] = useState(false)
  const [showNavPage, setShowNavPage] = useState(false)
  return (
    <AppContext.Provider
      value={{
        typeWriter,
        setTypeWriter,
        pageSlider,
        setPageSlider,
        showNavPage,
        setShowNavPage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
