import React from "react";

//short circuit evaluation
//ternary operator

const ShortCircuit = () => {
  const [text, setText] = React.useState("");
  const firstValue = text || "Hello World";
  const secondValue = text && "Hello World";
  return (
    <div>
      <h2>Short Circuit</h2>
    </div>
  );
};

export default ShortCircuit;
