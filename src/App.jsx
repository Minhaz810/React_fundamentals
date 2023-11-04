import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './components/Clock'
import ClockList from './components/clocklist'

function App() {
  const nums=[1,2,3,4]

  return (
    <>
      <div>
        <ClockList quantities={nums}/>
      </div>
    </>
  )
}

export default App
