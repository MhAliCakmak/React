import {NavLink} from 'react-router-dom'

export default function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </>
    );
  }