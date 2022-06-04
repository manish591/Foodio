import React from 'react';
import './PlaylistCard.css';
import { useNavigate } from 'react-router-dom';
import { VideoActions } from 'components';
import PropTypes from 'prop-types';

const PlaylistCard = ({ video, setSelectedId, selectedId, page }) => {
  const { _id, title, videos } = video;

  const navigate = useNavigate();

  return (
    <div className="playlist-card">
      <section
        className="playlist-card__image-container"
        onClick={() => navigate(`/explore/playlist/list/${_id}`)}
        onKeyUp={() => navigate(`/explore/playlist/list/${_id}`)}
        role="button"
        tabIndex={0}>
        <img
          src={`https://i.ytimg.com/vi/${videos[0]?._id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ`}
          alt=""
          className="playlist-card__img"
        />
        <div className="playlist-card__count flex">
          <p>{videos?.length}</p>
          <span className="material-icons-outlined">playlist_play</span>
        </div>
      </section>
      <section className="playlist-card__content plcd-content flex">
        <div className="plcd-content__description">
          <h3 className="playlist-card__title">{title}</h3>
        </div>
        <button
          type="button"
          className="plcd-content__actions"
          onClick={() =>
            setSelectedId((id) => {
              if (id !== _id) return _id;
              return id === '' ? _id : '';
            })
          }>
          <span className="material-icons-outlined">more_vert</span>
        </button>
        {selectedId === _id ? (
          <VideoActions video={video} setSelectedId={setSelectedId} page={page} />
        ) : null}
      </section>
    </div>
  );
};

PlaylistCard.propTypes = {
  video: PropTypes.object.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  page: PropTypes.object.string.isRequired
};

export { PlaylistCard };
