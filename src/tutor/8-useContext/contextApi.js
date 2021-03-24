import React, { useState, useContext } from "react";
import { data } from "../../data";

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  //remove people function
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h2>ContextAPI/useContext</h2>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // const { people } = useContext(PersonContext);
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        // console.log(person);
        return <Singleperson key={person.id} {...person} />;
      })}
    </>
  );
};

const Singleperson = ({ id, name }) => {
  // console.log(props);
  const { removePerson } = useContext(PersonContext);
  // console.log(removePerson);
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    </>
  );
};

export default ContextAPI;
