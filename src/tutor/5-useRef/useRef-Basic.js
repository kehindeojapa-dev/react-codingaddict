import React, { useEffect, useRef } from "react";

//preserve value
//doesn't invoke a re-render
//target DOM nodes/elements

const UseRefBasics = () => {
  const refInput = useRef(null);
  const refAfrica = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(refInput.current.value);
    console.log(refAfrica.current.children[0].textContent);
  };

  //To make the input receive focus on page load
  useEffect(() => {
    refInput.current.focus();
  });
  return (
    <>
      <h1>UseRef - Basics</h1>
      <form className="form" onSubmit={handleForm}>
        <input type="text" ref={refInput} />
        <button type="submit">Submit</button>
      </form>
      <div ref={refAfrica}>
        <p>Hello Africa</p>
      </div>
    </>
  );
};

export default UseRefBasics;
