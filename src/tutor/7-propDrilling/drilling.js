import React, { useState } from "react";
import { data } from "../../data";

const Drilling = () => {
  const [people, setPeople] = useState(data);

  //remove people function
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        // console.log(person);
        return (
          <Singleperson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const Singleperson = ({ id, name, removePerson }) => {
  // console.log(props);
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    </>
  );
};

export default Drilling;
