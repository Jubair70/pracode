import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [initialState,setInitialState] = useState("Parent State")
  return (
    <div className='App'>
      <Child props={{initialState,setInitialState}}/>
       
        
    </div>
  )
}

export default App;
