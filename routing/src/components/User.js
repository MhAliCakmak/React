import React from 'react'
import { useParams ,Link, userRouteMatch} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function User() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res)
        setUser(res.data)
        
      })
      .finally(() => setLoading(false))
      .catch(err => {
        console.log(err)
      })
      
  }, [id])
  return (
    <div>
        {loading ? <h1>Loading...</h1> : ( 
          <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.website}</h3>
            <h3>{user.company.name}</h3>
          </div>
            )}
     {
      /* 
      next user id
      */
     }
     {
      parseInt(id)<10 ? <Link to={`/user/${parseInt(id)+1}`}>Next User</Link> : <Link to={`/user/${parseInt(id)}`}>Next User</Link>
     }
     


        
    </div>
  )
}
