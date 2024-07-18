//CONDITONAL RENDERING PRACTICE

import React, { useState } from "react";
import UserProfile from "./Component/UserProfile";
import UserError from "./Component/UserError";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <>
      {status === true ? (
        <UserProfile setStatus={setStatus} />
      ) : (
        <UserError setStatus={setStatus} />
      )}
    </>
  );
}

export default App;
