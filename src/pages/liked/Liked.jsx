import React, { useState, useEffect } from "react";
import styles from "./Liked.module.css";
import { Thumbnail } from "../../components";
import axios from "axios";
import { useAuthContext, useStateContext, useScrollToTop } from "../../hooks";
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
          setLikedVideoData(res.data.likes);
          setIsLoading(false);
        }
      } catch (err) {
        console.log("getLikedHandler : Error in getting data", err);
        setIsLoading(false);
      }
    })();
  }, [likedVideos]);

  useScrollToTop();

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
                video={item}
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
