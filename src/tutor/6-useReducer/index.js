import React, { useState, useReducer } from "react";
import Modal from "./modal";

// Refactor to use useReducer

//reducer function
const reducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.value];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "No value recorded",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const id = action.value;
    const newPeople = state.people.filter((person) => person.id !== id);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item deleted",
    };
  }

  //no dispatch match
  throw new Error("no matching type found");
};

//Default State
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  //State
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  //Close Modal
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  // Form Handler
  const handleForm = (e) => {
    e.preventDefault();
    if (text) {
      dispatch({
        type: "ADD_ITEM",
        value: {
          id: new Date().getTime().toString(),
          name: text,
        },
      });
      setText("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      <h1>useReducer</h1>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
      {state.people.map(({ id, name }) => {
        // const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", value: id });
              }}
            >
              Remove item
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
