
import Counter from './components/counter';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/HoverCounter';




function App() {

  return (
    <>
      <div className='app'>
        
        {/* <User render={(isLoggedIn)=>(isLoggedIn?"Chowdhury":"guest")}/> */}
        <Counter>
          {(count,increamentCount)=>
          <ClickCounter count={count} increamentCount={increamentCount}/> }
        </Counter>

        <Counter>
          {(count,increamentCount)=>
          <HoverCounter count={count} increamentCount={increamentCount}/> }
        </Counter>

      </div>
    </>
  )
}

export default App

/*


*/