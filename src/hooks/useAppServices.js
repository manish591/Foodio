import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useStateContext } from "./useStateContext";
import { ACTION_TYPES } from "../reducer";

const useAppServices = () => {
  const { myToken } = useAuthContext();
  const { state, stateDispatch } = useStateContext();

  const isAlreadyInDatabaseVideo = (arr, _id) => {
    return arr?.some((item) => item._id === _id);
  };

  const addToLikeVideos = async ({ video }) => {
    try {
      const res = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_LIKED_VIDEOS,
          payload: { likes: res.data.likes },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromLikedVideos = async ({ videoId }) => {
    try {
      const res = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({
          type: ACTION_TYPES.GET_LIKED_VIDEOS,
          payload: { likes: res.data.likes },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addToWatchLater = async ({ video }) => {
    try {
      const res = await axios.post(
        "/api/user/watchlater",
        {
          video,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_WATCH_LATER_VIDEOS,
          payload: { watched: res.data.watchlater },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromWatchLater = async ({ videoId }) => {
    try {
      const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({
          type: ACTION_TYPES.GET_WATCH_LATER_VIDEOS,
          payload: { watched: res.data.watchlater },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addToHistory = async ({ video }) => {
    try {
      const res = await axios.post(
        "/api/user/history",
        {
          video,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_HISTORY_VIDEOS,
          payload: { history: res.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromHistory = async ({ videoId }) => {
    try {
      const res = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({
          type: ACTION_TYPES.GET_HISTORY_VIDEOS,
          payload: { history: res.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeAllVideosFromHistory = async () => {
    try {
      const res = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({
          type: ACTION_TYPES.GET_HISTORY_VIDEOS,
          payload: { history: res.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    addToLikeVideos,
    removeFromLikedVideos,
    isAlreadyInDatabaseVideo,
    addToWatchLater,
    removeFromWatchLater,
    addToHistory,
    removeFromHistory,
    removeAllVideosFromHistory,
  };
};

export { useAppServices };
