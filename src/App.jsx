import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Clock/>
      </div>
    </>
  )
}

export default App
