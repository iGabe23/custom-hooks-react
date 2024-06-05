import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h2>Counter With Hook:{counter}</h2>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +2
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
