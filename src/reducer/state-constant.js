const initialState = {
  videos: [],
  library: {
    playlist: [],
    watchLater: [],
    history: [],
    likedVideos: [],
  },
  filter: {
    category: "",
  },
};

const ACTION_TYPES = {
  GET_VIDEOS: "GET_VIDEOS",
};

export { ACTION_TYPES, initialState };
