import React from "react";
import { Navbar } from "../../components";
import { Chips } from "../../components";
import { Thumbnail } from "../../components";
import "./VideoListing.css";

const VideoListing = () => {
  return (
    <div className="video-listing">
      <Navbar />
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
