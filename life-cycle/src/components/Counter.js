import { useState, useEffect } from "react";

export default function Counter() {
 
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("state is updated");
  }, [number]);
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
}
