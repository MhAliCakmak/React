import { useState } from "react";
import Counter from "./components/Counter"
function App() {
 const [name,setName]=useState("John")
 const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={() => setName("Robert")}>Change</button>
      <hr/>
      <br/>
      {isVisible && <Counter/>}
      <button onClick={() => setIsVisible(false)}>Toggle</button>
      
    </div>
  );
}

export default App;
