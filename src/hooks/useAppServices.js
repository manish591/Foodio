import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useStateContext } from "./useStateContext";
import { ACTION_TYPES } from "../reducer";

const useAppServices = () => {
  const { myToken } = useAuthContext();
  const { state, stateDispatch } = useStateContext();

  const isAlreadyInLikedVideo = (arr, _id) => {
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
    } catch (err) {
      console.error(err);
    }
  };

  return {
    addToLikeVideos,
    removeFromLikedVideos,
    isAlreadyInLikedVideo,
  };
};

export { useAppServices };
