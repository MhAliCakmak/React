
import './App.css';
import { useState } from 'react';

import Counter from "./components/Counter"
import Input from "./components/Input"

function App() {
  const [name,setName]=useState("Mehmet");
  const [age,setAge]=useState(20);
  const [friends,setFriend]=useState(["Galip","Mustafa","Semih"]);
  const [address,setAddress]=useState({title:"Ankara",zip:"5134"})
  return (
    <div className="App">
      <h1>Hello {name}!</h1> 
      <h2>Age: {age}</h2>
      <button onClick={()=>setName("Ahmet")}>Change Name</button>
      <button onClick={()=>setAge(age+1)}>Change Age</button>
      <hr/>
      <br/>
      <h2>Friends </h2>
      {
        friends &&
        friends.map((friend,index) => (
          <h5 key="index">
            {friend}
          </h5>
        ))
      }
      <button onClick={()=>setFriend([...friends, "selim"])}>Add Friend</button>
      <hr/>
      <br/>
      <h2>
        <div>
          {address.title}
        </div>
        <div>
          {address.zip}
        </div>
      </h2>
      <button onClick={()=>setAddress({...address, zip:"63600",title:"Şanlıurfa"})}>Add Friend</button>
      <br/>
      <hr/>
      <h2>
        Counter
      </h2>
      <Counter/>
      <hr/>
      <br/>
      <Input/>
    </div>
  );
}

export default App;
