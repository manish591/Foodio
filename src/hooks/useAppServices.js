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

  const createPlaylists = async ({ title, description = "random" }) => {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title, description },
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      console.log(res.data);
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_PLAYLIST_DATA,
          payload: { myPlaylist: res.data.playlists },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlaylist = async ({ playlistId }) => {
    try {
      const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({
          type: ACTION_TYPES.GET_PLAYLIST_DATA,
          payload: { myPlaylist: res.data.playlists },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addVideoToPlaylist = async ({ playlistId, video }) => {
    try {
      const res = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      console.log(res);
      if (res.status === 201) {
        let arr = state.library.playlist.map((item) => {
          if (item._id === res.data.playlist._id) {
            return res.data.playlist;
          }
          return item;
        });
        stateDispatch({
          type: ACTION_TYPES.GET_PLAYLIST_DATA,
          payload: { myPlaylist: arr },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteVideoFromPlaylist = async ({ videoId, playlistId }) => {
    try {
      const res = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        let arr = state.library.playlist.map((item) => {
          if (item._id === res.data.playlist._id) {
            return res.data.playlist;
          }
          return item;
        });
        stateDispatch({
          type: ACTION_TYPES.GET_PLAYLIST_DATA,
          payload: { myPlaylist: arr },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isVideoInPlaylist = (_id, playlistId) => {
    const playlistToCheck = state.library.playlist.find(
      (item) => item._id === playlistId
    );
    return playlistToCheck.videos.find((item) => item._id === _id);
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
    createPlaylists,
    deletePlaylist,
    addVideoToPlaylist,
    isVideoInPlaylist,
    deleteVideoFromPlaylist,
  };
};

export { useAppServices };
