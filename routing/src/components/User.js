import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const { id } = useParams();
  const slugText = (text) => {
    return text.toLowerCase().replace(/ /g, "-");
  };
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.website}</h3>
          <h3>{user.company.name}</h3>
        </div>
      )}
      {/* 
      next user id
      */}
      
    </div>
  );
}
