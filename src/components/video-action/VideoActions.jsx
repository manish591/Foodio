import React from "react";
import "./VideoActions.css";

const VideoActions = () => {
  return (
    <div className="video-action">
      <ul className="video-action__list">
        <li className="video-action__item flex">
          <div className="video-action__icon">
            <span class="material-icons-outlined">add_to_queue</span>
          </div>
          <p className="video-action__item-name">Add To Queue</p>
        </li>
        <li className="video-action__item flex">
          <div className="video-action__icon">
            <span class="material-icons-outlined">watch_later</span>
          </div>
          <p className="video-action__item-name">Save To Watch Later</p>
        </li>
        <li className="video-action__item flex">
          <div className="video-action__icon">
            <span class="material-icons-outlined">playlist_add</span>
          </div>
          <p className="video-action__item-name">Save To Playlist</p>
        </li>
        <li className="video-action__item flex">
          <div className="video-action__icon">
            <span class="material-icons-outlined">share</span>
          </div>
          <p className="video-action__item-name">Share</p>
        </li>
      </ul>
    </div>
  );
};

export { VideoActions };
