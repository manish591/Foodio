import { useContext } from 'react';
import { StateContext } from 'context';

const useStateContext = () => {
  return useContext(StateContext);
};

export { useStateContext };
