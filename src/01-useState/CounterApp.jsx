import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounter] = useState({
    counter1: 1,
    counter2: 2,
    counter3: 3,
  });
  const { counter1, counter2, counter3 } = counters;
  return (
    <>
      <h2>Counter1: {counter1}</h2>
      <h2>Counter2: {counter2}</h2>
      <h2>Counter3: {counter3}</h2>
      <hr />
      <button
        onClick={() =>
          setCounter({
            ...counters,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
      <button onClick={() => setCounter(counter1.Counter1 - 1)}>-1</button>
    </>
  );
};
