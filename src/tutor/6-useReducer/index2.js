import React, { useState, useReducer } from "react";
import Modal from "./modal";
import { data } from "../../data";

const Index = () => {
  //State
  const [text, setText] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  // Form Handler
  const handleForm = (e) => {
    e.preventDefault();
    if (text) {
      setShowModal(true);
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: text },
      ]);
      setText("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {console.log(people)}
      <h1>useReducer</h1>
      {showModal && <Modal />}
      <form onSubmit={handleForm} className="form">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
      {people.map(({ id, name }) => {
        // const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
