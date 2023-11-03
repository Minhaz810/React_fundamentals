import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clocklist from './components/clocklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Clocklist quantity={3}/>
      </div>
    </>
  )
}

export default App
