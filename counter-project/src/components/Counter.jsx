import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementValue = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("MONTAR");
  }, []);

  return (
    <>
      <div>Counter</div>
      <h1>{counter}</h1>
      <button onClick={() => incrementValue()}>Aumentar Contador</button>
    </>
  );
}
