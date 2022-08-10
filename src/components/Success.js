import React from 'react'

function handleSubmit()  {
  alert('Learn Routers')
}

function Success() {
  return (
    <>
        <header><h1>Success</h1></header>
        <h1>You have completed the form</h1>
        <h4>Further Information will be passed</h4>
        <button onClick={handleSubmit}>Continue</button>
    </>
  )
}

export default Success