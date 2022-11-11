import * as React from "react";
import { Routes, Route, Link,useRoutes } from "react-router-dom";
import User from "./components/User";
import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";


import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
      </Routes>
      
    </div>
  );
}




export default App;