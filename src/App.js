import { useState } from 'react';
import './App.css';

function App() {
  const [cnt,setCnt] = useState(1) 
  return (
    <div className='App'>
        <h1>React Fizz Buzz</h1>
        <hr/>
        <span>
        Counting incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".
        if both then 'FizzBuzz'
        </span>
        <h2>
          {
            cnt%3===0 && cnt%5 ===0
            ?'FizzBuzz'
            :cnt%3===0
            ?'Fizz'
            :cnt%5===0
            ?'Buzz'
            :cnt
          }
        </h2>
        <button onClick={()=>setCnt(prevState=>prevState + 1)}>+</button>
        <button onClick={()=>setCnt(prevState=>prevState - 1)}>-</button>
    </div>
  )
}

export default App;
