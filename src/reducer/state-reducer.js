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

    case ACTION_TYPES.GET_HISTORY_VIDEOS:
      return {
        ...state,
        library: { ...state.library, history: action.payload.history },
      };

    case ACTION_TYPES.GET_PLAYLIST_DATA:
      return {
        ...state,
        library: { ...state.library, playlist: action.payload.myPlaylist },
      };

    case ACTION_TYPES.UPDATE_VIEWS:
      return {
        ...state,
        videos: [...state.videos].map((item) => {
          if (item._id === action.payload.video._id) {
            return { ...item, views: item.views + 1 };
          }
          return item;
        }),
      };

    case ACTION_TYPES.CLEAR_USER_DATA:
      return {
        ...state,
        videos: [],
        categoryData: [],
        filter: {
          category: "All",
        },
        library: {
          playlist: [],
          watchLater: [],
          history: [],
          likedVideos: [],
        },
      };

    default:
      return { ...state };
  }
};

export { stateReducer };
