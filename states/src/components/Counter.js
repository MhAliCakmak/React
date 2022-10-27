import { useState } from "react"


export default function Counter() {
    const [count,setCount]=useState(0);
    const increase = () => {
        setCount(count+1);
    }
    const decrase =() => {
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0);
    }
    return (
        <div>
            
            <p>{count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrase}>Decrase</button>
        </div>
        );
}