import { useState } from "react";

function Counter() {
  
  //useState():
  let [stateVariable, setStateVariable] = useState(10);
  let [count, setCount] = useState(0);
  console.log("Component is render!!");
  console.log(`Count is ${count}`);
  

   let incCount = () => {

    setCount(count += 1); //this is an Asynchronus function
    setCount (count += 1);

    // setCount((currCount) => { //this is a Synchronus function
    //   return currCount += 1;
    // })

    // setCount((nextCount) => {
    //   return nextCount += 1;
    // })

    console.log(`inside inCount, Count is ${count}`);
    
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

