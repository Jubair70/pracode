import React, { useState } from "react";
import "./counter.styles.scss";

const Counter = () => {
  const [cnt, setCnt] = useState(0);
  const counterHandler = (e) => {
    e.target.innerHTML === "Increment"
      ? setCnt((prevState) => prevState + 1)
      : setCnt((prevState) => prevState - 1);
  };

  return (
    <>
      <div>
        <h1>Counter: </h1> <h1>{cnt}</h1>
      </div>
      <div>
        <button onClick={(e) => counterHandler(e)}>Increment</button>
        <button onClick={(e) => counterHandler(e)}>Decrement</button>
      </div>
    </>
  );
};

export default React.memo(Counter);
