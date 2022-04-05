import React, { useState } from "react";
import "./VideoActions.css";
import { useAppServices } from "../../hooks";
import { PlaylistModal } from "../../pages";
import { useParams } from "react-router-dom";

const VideoActions = ({
  video,
  setSelectedId,
  page,
  isModalOpen,
  setIsModalOpen,
}) => {
  const {
    addToWatchLater,
    removeFromWatchLater,
    removeFromHistory,
    deletePlaylist,
    deleteVideoFromPlaylist,
  } = useAppServices();
  const { _id } = video;

  const { playlistId } = useParams();

  return (
    <div className="video-action">
      <ul className="video-action__list">
        <li className="video-action__item flex">
          <div className="video-action__icon">
            <span className="material-icons-outlined">add_to_queue</span>
          </div>
          <p className="video-action__item-name">Add To Queue</p>
        </li>
        {page === "WatchLater" ? (
          <li
            className="video-action__item flex"
            onClick={() => {
              setSelectedId("");
              removeFromWatchLater({ videoId: _id });
            }}
          >
            <div className="video-action__icon">
              <span className="material-icons-outlined">delete</span>
            </div>
            <p className="video-action__item-name">Remove from Watch Later</p>
          </li>
        ) : (
          <li
            className="video-action__item flex"
            onClick={() => {
              setSelectedId("");
              addToWatchLater({ video });
            }}
          >
            <div className="video-action__icon">
              <span className="material-icons-outlined">watch_later</span>
            </div>
            <p className="video-action__item-name">Save To Watch Later</p>
          </li>
        )}
        {page === "Playlist" ? (
          <li
            className="video-action__item flex"
            onClick={() => {
              setSelectedId("");
              deletePlaylist({ playlistId: _id });
            }}
          >
            <div className="video-action__icon">
              <span className="material-icons-outlined">delete</span>
            </div>
            <p className="video-action__item-name">Delete Playlist</p>
          </li>
        ) : page === "PlaylistListing" ? (
          <li
            className="video-action__item flex"
            onClick={() => {
              setSelectedId("");
              deleteVideoFromPlaylist({
                videoId: _id,
                playlistId,
              });
            }}
          >
            <div className="video-action__icon">
              <span className="material-icons-outlined">delete</span>
            </div>
            <p className="video-action__item-name">Remove From Playlist</p>
          </li>
        ) : (
          <li
            className="video-action__item flex"
            onClick={() => {
              setSelectedId("");
              setIsModalOpen(true);
            }}
          >
            <div className="video-action__icon">
              <span className="material-icons-outlined">playlist_add</span>
            </div>
            <p className="video-action__item-name">Save To Playlist</p>
          </li>
        )}
        {page === "History" && (
          <li
            className="video-action__item flex"
            onClick={() => {
              setSelectedId("");
              removeFromHistory({ videoId: _id });
            }}
          >
            <div className="video-action__icon">
              <span className="material-icons-outlined">delete</span>
            </div>
            <p className="video-action__item-name">Remove From History</p>
          </li>
        )}
        <li className="video-action__item flex">
          <div className="video-action__icon">
            <span className="material-icons-outlined">share</span>
          </div>
          <p className="video-action__item-name">Share</p>
        </li>
      </ul>
    </div>
  );
};

export { VideoActions };
