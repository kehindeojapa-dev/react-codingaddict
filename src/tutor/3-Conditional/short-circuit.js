import React from "react";

//short circuit evaluation
//ternary operator

const ShortCircuit = () => {
  const [text, setText] = React.useState("");
  const [buttonName, setButtonName] = React.useState("Show Error");
  const [isError, setIsError] = React.useState(false);
  //   const firstValue = text || "Hello World";
  //   const secondValue = text || "";
  return (
    <div>
      {/* <h2>Short Circuit</h2> */}

      <h1>{text || "John Doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
          if (buttonName === "Show Error") {
            setButtonName("Remove Error");
          } else {
            setButtonName("Show Error");
          }
        }}
      >
        {buttonName}
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <div>
          <p>There is an Error</p>
        </div>
      ) : (
        <div>
          <h2>Error not present at the moment</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
