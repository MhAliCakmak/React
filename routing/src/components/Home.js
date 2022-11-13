import {NavLink} from 'react-router-dom'
import Users from './Users'

export default function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <NavLink end  to="/about">About</NavLink>
        </nav>
        <nav>
          <NavLink end  to="/users">Users</NavLink>
        </nav>
      </>
    );
  }