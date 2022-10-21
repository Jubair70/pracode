import './App.css';
import {useState} from 'react'

function App() {
  const [show,setShow] = useState(true)
  return (
    <div className='App'>
        <button onClick={()=>setShow((prevState)=>!prevState
        )}>Toggle:{show?'Hide':'Show'}</button>
        {
          show && <h1>Hello world</h1>
        }
    </div>
  )
}

export default App;
