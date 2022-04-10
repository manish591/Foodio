import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useStateContext } from "./useStateContext";
import { ACTION_TYPES } from "../reducer";
import toast from "react-hot-toast";

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
        toast("Video Added To Favorites");
      }
    } catch (err) {
      console.log("addLikeVideoHandler : Error in saving to liked videos", err);
      toast.error("Unable To Add Video To Favorites");
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
        toast("Video Removed From Favorites");
      }
    } catch (err) {
      console.error(
        "removeFromLikedHandler : Error in removing data from liked",
        err
      );
      toast.error("Unable To Remove Video From Favorites! Try Again Later");
    }
  };

  const addToWatchLater = async ({ video }) => {
    if (state.library.watchLater.some((item) => item._id === video._id)) {
      toast.error("Already Added To Your Watchlist");
      return;
    }
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
        toast("Video Added To Your Watchlist");
      }
    } catch (err) {
      console.error(
        "watchLaterHandler : Error in adding video to watch later",
        err
      );
      toast.error("Unable To Add To Your Watchlist! Try Again Later");
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
        toast("Video Removed From Your Watchlist");
      }
    } catch (err) {
      console.error(
        "removeFromWatchLaterHandler : Error in removing from watchlater",
        err
      );
      toast.error("Unable To Remove From Watchlist! Try Again Later");
    }
  };

  const addToHistory = async ({ video }) => {
    if (state.library.history.some((item) => item._id === video._id)) {
      return;
    }
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
      console.log("addHistoryHandler : Error in adding to the history", err);
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
        toast("Successfully Removed From The History");
      }
    } catch (err) {
      console.log(
        "removeFromHistoryHandler : Error in removing videos from the history",
        err
      );
      toast.error("Unable To Remove From History! Try Again Later");
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
        toast("Your History Cleared");
      }
    } catch (err) {
      console.log("clearHistoryHandler : Error in clearing history", err);
      toast.error("Unable To Clear History! Try Again Later");
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
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_PLAYLIST_DATA,
          payload: { myPlaylist: res.data.playlists },
        });
        toast(`Created Playlist "${title}"`);
      }
    } catch (err) {
      console.error("createPlaylistHandler : Error in creating playlist", err);
      toast.error(`Unable To Create Playlist "${title}"! Try Again Later`);
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
        toast("Playlist Successfully Deleted");
      }
    } catch (err) {
      console.error("deletePlaylistHandler : Error in deleting playlist", err);
      toast.error("Unable To Delete Playlist! Try Again Later");
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
        toast("Video Added To Playlist");
      }
    } catch (err) {
      console.log(
        "addToPlaylistHandler : Error in adding videos to playlist",
        err
      );
      toast.error("Unable To Add Video To The Playlist! Try Again Later");
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
        toast("Video Deleted From The Playlist");
      }
    } catch (err) {
      console.log(
        "deleteVideoFromPlaylistHandler : Error in deleting videos from playlist",
        err
      );
      toast.error("Unable To Delete Video From The Playlist! Try Again Later");
    }
  };

  const updateVideoViews = ({ video }) => {
    const updatedVideoList = state.videos.map((item) => {
      if (item._id === video._id) {
        return { ...item, views: item.views + 1 };
      }
      return item;
    });
    stateDispatch({
      type: ACTION_TYPES.GET_VIDEOS,
      payload: { videos: updatedVideoList },
    });
  };

  const isVideoInPlaylist = (_id, playlistId) => {
    const playlistToCheck = state.library.playlist.find(
      (item) => item._id === playlistId
    );
    return playlistToCheck.videos.find((item) => item._id === _id);
  };

  const addNotesToVideo = async ({ note }) => {
    try {
      const res = await axios.post(
        "/api/user/notes",
        {
          note,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_NOTES,
          payload: { myNotes: res.data.notes },
        });
        toast("Notes Successfully Added!");
      }
    } catch (err) {
      console.error("addNotesHandler : Error in adding notes", err);
      toast.error("Something Went Wrong! Try Again Later!");
    }
  };

  const deleteNoteFromVideo = async ({ noteId }) => {
    try {
      const res = await axios.delete(`/api/user/notes/${noteId}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({
          type: ACTION_TYPES.GET_NOTES,
          payload: { myNotes: res.data.notes },
        });
        toast("Notes Has Been Deleted From The Video.");
      }
    } catch (err) {
      console.error(
        "deleteNotesHandler : Error in deleting notes handler",
        err
      );
      toast.error("Unable To Delete Note! Try Again Later");
    }
  };

  const editNote = async ({ noteId, note }) => {
    try {
      const res = await axios.post(
        `/api/user/notes/${noteId}`,
        {
          note,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 201) {
        stateDispatch({
          type: ACTION_TYPES.GET_NOTES,
          payload: { myNotes: res.data.notes },
        });
        toast("Notes Successfully Updated");
      }
    } catch (err) {
      console.error("editNotesHandler : Error in deleting notes", err);
      toast.error("Unable To Edit Now! Try Again Later");
    }
  };

  const uploadVideo = (videoData) => {
    const newVideo = {
      ...videoData,
      _id: videoData.videoUrl.split("v=")[1],
      views: 0,
    };
    stateDispatch({
      type: ACTION_TYPES.GET_VIDEOS,
      payload: { videos: [newVideo, ...state.videos] },
    });
    stateDispatch({
      type: ACTION_TYPES.GET_UPLOADED_VIDEOS,
      payload: { uploadedVideos: [newVideo, ...state.library.uploads] },
    });
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
    updateVideoViews,
    addNotesToVideo,
    deleteNoteFromVideo,
    editNote,
    uploadVideo,
  };
};

export { useAppServices };
