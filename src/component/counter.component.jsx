import React, { useState, createContext, useContext } from "react";
import "./counter.styles.scss";
import ShowCounter from './showCounter.component'
import CounterContext from '../store/total-context'

const Counter = () => {
  const [cnt, setCnt] = useState(0);
  const counterHandler = (e) => {
    e.target.innerHTML === "Increment"
      ? setCnt((prevState) => prevState + 1)
      : setCnt((prevState) => prevState - 1);
  };

  return (
    <CounterContext.Provider value={cnt}>
      <ShowCounter/>
      <div>
        <button onClick={(e) => counterHandler(e)}>Increment</button>
        <button onClick={(e) => counterHandler(e)}>Decrement</button>
      </div>
    </CounterContext.Provider>
  );
};

export default React.memo(Counter);
