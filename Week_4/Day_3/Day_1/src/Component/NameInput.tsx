import React from "react";

function NameInput() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("typed value:", e.target.value);
  }

  return <input type="text" onChange={handleChange} placeholder="Type something" />;
}

export default NameInput;