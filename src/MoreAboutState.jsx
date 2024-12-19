import { useState } from "react";

let init = () => {
    console.log("init was called")
    return Math.floor(Math.random() * 10) + 1;
}

function State() {
    let [count, setCount] = useState(init);
    
    let incCount = () => {
        setCount((currCount) => {
        return currCount + 1;
    })
    }

return (
    <>
        <button onClick={incCount}>Click {count}</button>
    </>
)
}

export default State;