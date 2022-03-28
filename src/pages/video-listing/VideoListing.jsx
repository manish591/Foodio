import React from "react";
import "./VideoListing.css";
import { Chips, Thumbnail } from "../../components";

const VideoListing = () => {
  return (
    <div className="video-listing">
      <Chips />
      <div className="video-listing__container grid">
        {[...Array(10)].map((item) => {
          return <Thumbnail />;
        })}
      </div>
    </div>
  );
};

export { VideoListing };
