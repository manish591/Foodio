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
};

export { ACTION_TYPES, initialState };
