import "./App.css";
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";
import { useState } from "react";
import State from "./MoreAboutState.jsx";

function App() {
  let [count, setCount] = useState(0);
  console.log("component is re-render")

  let incCount = () => {
    setCount (25);
  }
  return (
    <>
      <h1>States in React</h1>
      {/* <Counter />
      <LikeButton />
      <button onClick={incCount}>Click {count}</button> */}
      <br />
      <State/>
    </>
  );
}

export default App;
