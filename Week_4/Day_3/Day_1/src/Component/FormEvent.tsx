import React from "react";

function SimpleForm() {
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault(); // stops the page from reloading
    console.log("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type something" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;