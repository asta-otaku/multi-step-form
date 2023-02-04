import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>Success</h1>
      </header>
      <h1>You have completed the form</h1>
      <h4>Further Information will be passed</h4>
      <button onClick={() => navigate("/")}>Continue</button>
    </>
  );
}

export default Success;
