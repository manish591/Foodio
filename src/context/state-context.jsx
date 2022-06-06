import React, { createContext, useReducer } from 'react';
import { initialState, stateReducer } from 'reducer';
import PropTypes from 'prop-types';

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        state,
        stateDispatch
      }}>
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { StateContext, StateContextProvider };
