import React, { useState, useEffect } from "react";

const App = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    console.log("size-rerendered");
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("side-effect rerendered");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleaning process finished");
      window.removeEventListener("resize", checkSize);
    };
  });

  //   window.addEventListener("resize", checkSize);

  return (
    <div>
      <h2>Window</h2>
      <h4>{size} px</h4>
    </div>
  );
};

export default App;
