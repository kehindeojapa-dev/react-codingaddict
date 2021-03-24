import React, { useState, useReducer } from "react";
import Modal from "./modal";
import { reducer } from "./reducer";

// Refactor to use useReducer

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
