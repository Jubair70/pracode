import React from "react";

const Child=(props)=>{
    console.log(props.props.initialState);
    return (
        <button onClick={
            ()=>{
              return  props.props.setInitialState((prevState)=>"Changed");
            }
          }>{props.props.initialState}</button>
    )
}

export default Child;