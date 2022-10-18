import React,{useContext} from 'react';
import CounterContext from '../store/total-context'

const ShowCounter = () =>{
    const cnt = useContext(CounterContext) 
    return (
    <div>
        <h1>Counter: </h1> <h1>{cnt}</h1>
      </div>
    )
}
export default ShowCounter;