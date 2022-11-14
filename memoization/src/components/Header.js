import React from 'react'

function Header(props) {
    console.log("Header Rendered");
  return (
    
    <div>
      <br/>
      Header <br/><br/>
    <button onClick={props.increment}>Increment</button>
    </div>
  )
}

export default React.memo(Header)