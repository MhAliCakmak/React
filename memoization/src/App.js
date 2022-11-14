import {useState,useMemo,useCallback} from "react";
import './App.css';
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0);
  // const data = {
  //   name: "John",
  //   age: 25

  // }
  // const data = useMemo(() => {
  //   return [ 
  //     {
  //       name: "John",
  //       age: 25
  //     },
  //     {
  //       name: "Jane",
  //       age: 30
  //     }
  //   ]
  // },[])
  const increment = useCallback(() => {
    setCount((prevState)=> prevState+1)
  },[])

  return (
    <div className="App">
      <Header  increment={increment}/>
      <hr/>
      <h1>{count}</h1>
      
      
      <input value={count} type="number" onChange={(e) => setCount(parseInt(e.target.value))}/>
    </div>
  );
}

export default App;
