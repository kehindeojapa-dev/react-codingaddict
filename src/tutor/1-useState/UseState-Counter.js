import React from "react";

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0);
  // Click Functions
  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1); //runs these statement once
      setValue((prevState) => {
        return prevState + 1;
      });
      // above line runs as many times the button is
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem auto", textAlign: "center" }}>
        <h2>Regular Counter</h2>
        <br />
        <h1>{value}</h1>
        <button onClick={increase} className="btn">
          +
        </button>
        <button onClick={decrease} className="btn">
          -
        </button>
        <button onClick={reset} className="btn">
          reset
        </button>
      </section>
      <section style={{ margin: "4rem auto", textAlign: "center" }}>
        <h2>Regular Counter</h2>
        <br />
        <h1>{value}</h1>
        <button onClick={complexIncrease} className="btn">
          Complex Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
