import { useState } from "react";

function Counter() {
  
  //useState():
  let [stateVariable, setStateVariable] = useState(10);
  let [count, setCount] = useState(0);

   let incCount = () => {
    setCount(count + 1)
    // count += 1;
    // console.log(count);
   }

  return (
    <>
      <button onClick={incCount}>Count {count}</button>
    </>
  );
}

export default Counter;
