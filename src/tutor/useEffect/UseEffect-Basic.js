import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log("fbi side-effect function called");
    if (value2 > 0) {
      document.title = `New FBI Message(${value2})`;
    } else {
      document.title = "FBI Page";
    }
  }, [value2]);

  useEffect(() => {
    console.log("side-effect function called");
    if (value > 0) {
      document.title = `New Message(${value})`;
    } else {
      document.title = "Tutorial App";
    }
  }, [value]);

  return (
    <>
      <h2>useEffect - Basic</h2>

      <br />

      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        decrease
      </button>

      <h1>{value2}</h1>
      <button className="btn" onClick={() => setValue2(value2 + 1)}>
        increase
      </button>
      <button className="btn" onClick={() => setValue2(value2 - 1)}>
        decrease
      </button>
    </>
  );
};

export default UseEffectBasic;
