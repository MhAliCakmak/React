
import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            ))}
            
        </ul>
        <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}
export default Users