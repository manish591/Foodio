import React, { useState, useEffect } from "react";
import styles from "./Liked.module.css";
import { Thumbnail } from "../../components";
import axios from "axios";
import { useAuthContext } from "../../hooks";
import { useStateContext } from "../../hooks";
import { ACTION_TYPES } from "../../reducer";

const LikedVideos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { myToken } = useAuthContext();
  const { state, stateDispatch } = useStateContext();
  const [likedVideoData, setLikedVideoData] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const { library } = state;
  const { likedVideos } = library;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/likes", {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.GET_LIKED_VIDEOS,
            payload: { likes: res.data.likes },
          });
          setLikedVideoData(res.data.likes);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    })();
  }, [likedVideos]);

  return (
    <div className={styles.liked}>
      <section className={`flex ${styles.liked__top}`}>
        <span className="material-icons">thumb_up_off_alt</span>
        <p className="hero">
          Liked ({state.library.likedVideos?.length} Videos)
        </p>
      </section>
      {isLoading ? null : (
        <section className={`${styles.liked__container} grid`}>
          {likedVideoData.map((item) => {
            return (
              <Thumbnail
                key={item._id}
                {...item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export { LikedVideos };
