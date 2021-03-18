import React from "react";

const App = () => {
  let title = "random title";
  const handleClick = () => {
    title = "Hello World";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h1>Error-Example</h1>
      <h3>{title}</h3>
      <button type="button" onClick={handleClick}>
        Change Me
      </button>
    </React.Fragment>
  );
};

export default App;
