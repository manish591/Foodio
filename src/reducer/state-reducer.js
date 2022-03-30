import { ACTION_TYPES } from "./state-constant";

const stateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    case ACTION_TYPES.GET_CATEGORIES:
      return { ...state, categoryData: action.payload.categories };
    default:
      return { ...state };
  }
};

export { stateReducer };
