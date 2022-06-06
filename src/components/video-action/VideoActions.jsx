import React from 'react';
import './VideoActions.css';
import { useParams } from 'react-router-dom';
import { useAppServices } from 'hooks';
import PropTypes from 'prop-types';

const VideoActions = ({ video, setSelectedId, page, setIsModalOpen }) => {
  const {
    addToWatchLater,
    removeFromWatchLater,
    removeFromHistory,
    deletePlaylist,
    deleteVideoFromPlaylist
  } = useAppServices();
  const { _id } = video;

  const { playlistId } = useParams();

  return (
    <div className="video-action">
      <ul className="video-action__list">
        {page === 'WatchLater' ? (
          <li className="video-action__item">
            <button
              type="button"
              className="video-action__icon flex"
              onClick={() => {
                setSelectedId('');
                removeFromWatchLater({ videoId: _id });
              }}>
              <span className="material-icons-outlined">delete</span>
              <p className="video-action__item-name">Remove from Watch Later</p>
            </button>
          </li>
        ) : (
          <li className="video-action__item">
            <button
              type="button"
              className="video-action__icon flex"
              onClick={() => {
                setSelectedId('');
                addToWatchLater({ video });
              }}>
              <span className="material-icons-outlined">watch_later</span>
              <p className="video-action__item-name">Save To Watch Later</p>
            </button>
          </li>
        )}
        {page === 'Playlist' && (
          <li className="video-action__item">
            <button
              type="button"
              className="video-action__icon flex"
              onClick={() => {
                setSelectedId('');
                deletePlaylist({ playlistId: _id });
              }}>
              <span className="material-icons-outlined">delete</span>
              <p className="video-action__item-name">Delete Playlist</p>
            </button>
          </li>
        )}
        {page === 'PlaylistListing' && (
          <li className="video-action__item">
            <button
              type="button"
              className="video-action__icon flex"
              onClick={() => {
                setSelectedId('');
                deleteVideoFromPlaylist({
                  videoId: _id,
                  playlistId
                });
              }}>
              <span className="material-icons-outlined">delete</span>
              <p className="video-action__item-name">Remove From Playlist</p>
            </button>
          </li>
        )}
        <li className="video-action__item">
          <button
            type="button"
            className="video-action__icon flex"
            onClick={() => {
              setSelectedId('');
              setIsModalOpen(true);
            }}>
            <span className="material-icons-outlined">playlist_add</span>
            <p className="video-action__item-name">Save To Playlist</p>
          </button>
        </li>
        {page === 'History' && (
          <li className="video-action__item ">
            <button
              type="button"
              className="video-action__icon flex"
              onClick={() => {
                setSelectedId('');
                removeFromHistory({ videoId: _id });
              }}>
              <span className="material-icons-outlined">delete</span>
              <p className="video-action__item-name">Remove From History</p>
            </button>
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

VideoActions.propTypes = {
  video: PropTypes.object.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  setIsModalOpen: PropTypes.func.isRequired
};

export { VideoActions };
