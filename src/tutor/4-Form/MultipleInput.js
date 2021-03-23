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

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (person.name && person.age && person.email) {
      // const { name, age, email } = person;
      const newEntry = {
        id: new Date().getTime().toLocaleString(),
        ...person,
      };
      setPeople((people) => {
        return [...people, newEntry];
      });
      setPerson({ name: "", age: "", email: "" });
    }
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
          const { id, name, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <h2>{age}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default CreateList;
