import {Link} from 'react-router-dom'
import Users from './Users'

export default function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/users">Users</Link>
        </nav>
      </>
    );
  }