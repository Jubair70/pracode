import React from 'react';
import CounterContext from '../store/total-context'

const ShowCounter = (props) =>{
    
    return (
    <div>
        <h1>Counter: </h1> <h1>{props.cnt}</h1>
      </div>
    )
}
export default ShowCounter;