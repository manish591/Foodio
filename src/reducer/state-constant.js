const initialState = {
  videos: [],
  categoryData: [],
  library: {
    playlist: [],
    watchLater: [],
    history: [],
    likedVideos: [],
  },
  filter: {
    category: "All",
  },
};

const ACTION_TYPES = {
  GET_VIDEOS: "GET_VIDEOS",
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_LIKED_VIDEOS: "GET_LIKED_VIDEOS",
  FILTER_BY_CATEGORY: "FILTER_BY_CATEGORY",
};

export { ACTION_TYPES, initialState };
