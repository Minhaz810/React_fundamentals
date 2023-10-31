import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './components/Clock';


function App() {

  return (
    <>
      <div>
        <Clock locale="en"/>
      </div>
    </>
  )
}

export default App
