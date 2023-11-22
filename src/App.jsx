import { useState } from 'react'
import Tutorial from './Components/Tutorial'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Components/styles/global.styles'
import { createContext } from 'react'
export const ThemeContext=createContext()
function App() {
  const [theme,setTheme]=useState({
      type:"dark",
      wrapperColor: '#000000',
      cardColor:'#1e1e1e',
      h1Color:'#ffffff',
      paragraphColor:'#fff',
      buttonColor:'#aaa',
      buttonHoverColor:'#fff'
  })

  const darkTheme=
    {
      type:"dark",
      wrapperColor: '#000000',
      cardColor:'#1e1e1e',
      h1Color:'#ffffff',
      paragraphColor:'#fff',
      buttonColor:'#aaa',
      buttonHoverColor:'#fff'
    }
  const lightTheme={
    type:"light",
    wrapperColor: '#f0f2f5',
    cardColor:'#ba9999',
    h1Color:'#111',
    paragraphColor:'#140101',
    buttonColor:'#111',
    buttonHoverColor:'#fff'
  }
  const ChangeTheme=()=>{
    if(theme.type=="dark"){
      setTheme(lightTheme)
    }else{
      setTheme(darkTheme)
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <ThemeContext.Provider value={{ChangeTheme:ChangeTheme}}>
          <Tutorial>
          </Tutorial>
        </ThemeContext.Provider>
      </ThemeProvider>
      
      
    </>
  )
}

export default App











