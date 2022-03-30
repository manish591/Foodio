import { ACTION_TYPES } from "./state-constant";

const stateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    default:
      return { ...state };
  }
};

export { stateReducer };
