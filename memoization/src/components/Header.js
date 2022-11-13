import React from 'react'

function Header(props) {
    console.log("Header Rendered");
  return (
    <div>Header {props.data[0].name}</div>
  )
}

export default React.memo(Header)