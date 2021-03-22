import React from "react";

const FormBasic = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Hello World");
    alert(document.getElementById("email").value);
    // alert("Hello World");
  };

  return (
    <>
      <h1>Form - Basics</h1>
      <form className="form" onSubmit={handleForm}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" />
        </div>
        <button type="submit">Add Person</button>
      </form>
    </>
  );
};

export default FormBasic;
