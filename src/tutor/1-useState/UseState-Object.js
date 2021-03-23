import React from "react";

const App = () => {
  const [person, setPerson] = React.useState({
    name: "Daniel",
    age: 23,
    occupation: "Software-Engineer",
  });

  //or
  const [name, setName] = React.useState("Daniel");
  const [age, setAge] = React.useState("23");
  const [occupation, setOccupation] = React.useState("Software-Engineer");

  const changeMessage = () => {
    // setPerson({ ...person, occupation: "Full Stack Developer" });
    setOccupation("Full Stack Developer");
    setAge("24");
    setName("Kehinde");
  };
  return (
    <>
      <h1>useState - Object</h1>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.occupation}</h3> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{occupation}</h3>
      <button onClick={changeMessage}>change message</button>
    </>
  );
};

export default App;
