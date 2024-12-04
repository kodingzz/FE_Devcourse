import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default React.memo(function CountButtons() {
  const { increment, decrement, reset } = useContext(CounterContext)!;
  console.log("counterButtons rendering");

  return (
    <div>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </div>
  );
});