import { useState } from 'react'

import Tutorial from './Components/Tutorial'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './Components/styles/global.styles'
function App() {
  
  const lightTheme={
    wrapperColor:'#f0f2f5',

  }
  return (
    <>
      <ThemeProvider them/>
      <GlobalStyle/>
      <Tutorial/>
      <ThemeProvider/>
      
    </>
  )
}

export default App











