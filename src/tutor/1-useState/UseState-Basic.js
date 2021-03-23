import React, { useState } from "react";

const App = () => {
  //   let title = "random title";
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello Engineer Daniel");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>useState - Basics</h2>
      <br />
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>
        change Me
      </button>
    </React.Fragment>
  );
};

export default App;
