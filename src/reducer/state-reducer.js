import { ACTION_TYPES } from "./state-constant";

const stateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_VIDEOS:
      return { ...state, videos: action.payload.videos };

    case ACTION_TYPES.GET_CATEGORIES:
      return { ...state, categoryData: action.payload.categories };

    case ACTION_TYPES.FILTER_BY_CATEGORY:
      return {
        ...state,
        filter: { ...state.filter, category: action.payload },
      };

    case ACTION_TYPES.GET_LIKED_VIDEOS:
      return {
        ...state,
        library: { ...state.library, likedVideos: action.payload.likes },
      };

    case ACTION_TYPES.GET_WATCH_LATER_VIDEOS:
      return {
        ...state,
        library: { ...state.library, watchLater: action.payload.watched },
      };

    default:
      return { ...state };
  }
};

export { stateReducer };
