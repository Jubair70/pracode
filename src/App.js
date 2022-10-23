import { useRef } from 'react';
import './App.css';
import Child from './Child.component';

function App() {
  const childRef = useRef(null);
  return (
    <div className='App'>
        <h1>Parent Com</h1>
        <hr/>
        <Child ref={childRef}/>
        <button onClick={()=>childRef.current.getMessage()}>Call from Parent</button>
    </div>
  )
}

export default App;
