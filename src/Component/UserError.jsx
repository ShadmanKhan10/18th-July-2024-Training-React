//CONDITONAL RENDERING PRACTICE

import React from "react";

export default function UserError({ setStatus }) {
  const handleLogin = () => {
    setStatus(true);
  };
  return (
    <div>
      <p>You are not LoggedIn</p>
      <button onClick={handleLogin}>LogIn</button>
    </div>
  );
}
