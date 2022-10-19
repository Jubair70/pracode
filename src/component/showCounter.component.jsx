import React from 'react';

const ShowCounter = (props) =>{
    
    return (
    <div>
        <h1>Counter: </h1> <h1>{props.cnt}</h1>
      </div>
    )
}
export default ShowCounter;