import React, { useState } from "react";

const CreateList = () => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  const [person, setPerson] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);
  const handleForm = (e) => {
    setCount(count + 1);
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (email && name) {
      // people.push({
      //   id: count,
      //   name: name,
      //   email: email,
      // });

      //or
      const person = {
        id: count,
        name,
        email,
      };
      setPeople((people) => {
        return [...people, person];
      });
    }
    console.log(people);
    // setEmail("");
    // setName("");
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(`${name}: ${value}`);
  };
  return (
    <>
      <h2>Create a List</h2>
      <br />
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleForm}>
            Add to List
          </button>
        </form>
        {people.map((person) => {
          const { id, name, email } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default CreateList;
