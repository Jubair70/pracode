import { useRef } from 'react';
import './App.css';
import Child from './component/Child';

function App() {
  const childRef = useRef();
  return (
    <div className='App'>
      <Child ref={childRef}/>
      <button onClick={()=>{
        childRef.current.getALert()
      }}> Click </button>
    </div>
  )
}

export default App;
