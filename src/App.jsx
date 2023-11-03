import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clocklist from './components/clocklist'

function App() {
  const quantities=[1,2,3];
  return (
    <>
      <div>
        <Clocklist quantities={quantities}/>
      </div>
    </>
  )
}

export default App
