import React, { useState, useEffect } from "react";
import "./VideoListing.css";
import { Chips, Thumbnail } from "../../components";
import { useStateContext, useScrollToTop } from "../../hooks";
import { ACTION_TYPES } from "../../reducer";
import { getFilterByCategoryItem } from "../../utilis";
import axios from "axios";
import { useAuthContext } from "../../hooks";

const VideoListing = () => {
  const { state } = useStateContext();
  const [selectedId, setSelectedId] = useState("");

  useScrollToTop();

  return (
    <div className="video-listing">
      <Chips />
      <div className="video-listing__container grid">
        {getFilterByCategoryItem(state.videos, state.filter.category).map(
          (videoItem) => {
            return (
              <Thumbnail
                key={videoItem.id}
                video={videoItem}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export { VideoListing };
