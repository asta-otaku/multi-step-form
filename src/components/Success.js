import React from 'react'

function Success() {
  return (
    <>
        <header><h1>Success</h1></header>
        <h1>You have completed the form</h1>
        <h4>Further Information will be passed</h4>
        <button onClick={() => window.location = '/'}>Continue</button>
    </>
  )
}

export default Success