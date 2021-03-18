import React, { useState } from "react";
import { data } from "../data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h2>UseState - Array</h2>
      {people.map((person) => {
        const { id, name } = person;
        const removeItem = (id) => {
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        };
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button type="button" onClick={() => removeItem(id)}>
              remove me
            </button>
          </div>
        );
      })}

      <button type="button" onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default App;
