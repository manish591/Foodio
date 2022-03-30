import React, { useEffect } from "react";
import "./VideoListing.css";
import { Chips, Thumbnail } from "../../components";
import { useStateContext } from "../../hooks";
import { ACTION_TYPES } from "../../reducer";
import axios from "axios";

const VideoListing = () => {
  const { state, stateDispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/videos");
        console.log(res.status);
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
  }, []);

  return (
    <div className="video-listing">
      <Chips />
      <div className="video-listing__container grid">
        {state.videos.map((videoItem) => {
          return <Thumbnail key={videoItem.id} {...videoItem} />;
        })}
      </div>
    </div>
  );
};

export { VideoListing };
