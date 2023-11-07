import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/HoverCounter';



function App() {

  return (
    <>
      <div className='app'>
        <ClickCounter/>
        <HoverCounter/>
      </div>
    </>
  )
}

export default App