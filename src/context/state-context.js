import React, { createContext, useReducer } from "react";
import { initialState, stateReducer } from "../reducer";

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider
      value={{
        state,
        stateDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
