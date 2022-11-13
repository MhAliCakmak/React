import {useState,useMemo} from "react";
import './App.css';
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0);
  // const data = {
  //   name: "John",
  //   age: 25

  // }
  const data = useMemo(() => {
    return [ 
      {
        name: "John",
        age: 25
      },
      {
        name: "Jane",
        age: 30
      }
    ]
  },[])
  return (
    <div className="App">
      <Header data={data}/>
      <hr/>
      <h1>{count}</h1>
      
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
