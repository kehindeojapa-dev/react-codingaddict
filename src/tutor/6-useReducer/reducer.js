//reducer function
export const reducer = (state, action) => {
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
      modalContent: "Please Enter a Value",
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
