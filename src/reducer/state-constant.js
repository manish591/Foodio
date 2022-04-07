const initialState = {
  videos: [],
  categoryData: [],
  library: {
    playlist: [],
    watchLater: [],
    history: [],
    likedVideos: [],
    notes: [],
  },
  filter: {
    category: "All",
  },
};

const ACTION_TYPES = {
  GET_VIDEOS: "GET_VIDEOS",
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_LIKED_VIDEOS: "GET_LIKED_VIDEOS",
  GET_WATCH_LATER_VIDEOS: "GET_WATCH_LATER_VIDEOS",
  GET_HISTORY_VIDEOS: "GET_HISTORY_VIDEOS",
  GET_PLAYLIST_DATA: "GET_PLAYLIST_DATA",
  FILTER_BY_CATEGORY: "FILTER_BY_CATEGORY",
  CLEAR_USER_DATA: "CLEAR_USER_DATA",
  GET_NOTES: "GET_NOTES",
};

export { ACTION_TYPES, initialState };
