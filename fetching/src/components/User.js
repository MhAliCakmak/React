import { useEffect, useState } from "react";
import axios from "axios";
export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
//we are using useEffect to fetch data from the API
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);
// we are using axios to fetch data from the API
  useEffect(() => {
    axios 
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        users.map((user) => <div>{user.name}</div>)
      )}
    </div>
  );
}
