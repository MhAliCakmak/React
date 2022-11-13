import { Routes, Route, Link, Outlet } from "react-router-dom";
import User from "./User";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const slugText = (text) => {
    return text.toLowerCase().replace(/ /g, "-");
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${slugText(user.name)}/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={() => window.history.back()}>Go Back</button>
      <Outlet />
    </div>
  );
}
export default Users;
