import { useEffect } from "react";
import { useStateContext } from "./useStateContext";
import { useAuthContext } from "./useAuthContext";

const useInitializeData = () => {
  const { state, stateDispatch } = useStateContext();
  const { isUserLogedIn } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/videos");
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.GET_VIDEOS,
            payload: { videos: res.data.videos },
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isUserLogedIn]);
};

export { useInitializeData };
