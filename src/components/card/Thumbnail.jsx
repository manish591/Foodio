import React, { useState } from 'react';
import './Thumbnail.css';
import { useNavigate } from 'react-router-dom';
import { PlaylistModal } from 'pages';
// import { getInitials } from 'utilis';
import { VideoActions } from 'components';
import PropTypes from 'prop-types';

const Thumbnail = ({ video, selectedId, setSelectedId, page, avatarId }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="thumbnail">
      <section
        className="thumbnail__image-container"
        onClick={() => navigate(`/explore/watch/${video?._id}`)}
        onKeyUp={() => navigate(`/explore/watch/${video?._id}`)}
        tabIndex={0}
        role="button">
        <img
          src={`https://i.ytimg.com/vi/${video?._id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ`}
          alt="thumbnail"
          className="thumbnail__img"
        />
      </section>
      <section className="thumbnail__content th-content flex">
        <div
          className="th-content__profile"
          onClick={() => navigate(`/explore/watch/${video?._id}`)}
          onKeyUp={() => navigate(`/explore/watch/${video?._id}`)}
          role="button"
          tabIndex={0}>
          <button
            type="button"
            className="avatar avatar--large avatar--initial"
            onClick={() => navigate(`/explore/watch/${video?._id}`)}>
            <img
              src={`https://i.pravatar.cc/150?img=${avatarId}`}
              alt=""
              style={{ borderRadius: '50%' }}
            />
          </button>
        </div>
        <button
          type="button"
          className="th-content__description"
          onClick={() => navigate(`/explore/watch/${video?._id}`)}>
          <h3 className="thumbnail__title">{video?.title}</h3>
          <p className="thumbnail__author">{video?.author}</p>
          <span className="thumbnail__counts">12M views - 2 days ago</span>
        </button>
        <button
          type="button"
          className="th-content__actions"
          onClick={() =>
            setSelectedId((id) => {
              if (id !== video?._id) return video?._id;
              return id === '' ? video?._id : '';
            })
          }>
          <span className="material-icons-outlined">more_vert</span>
        </button>
        {selectedId === video?._id ? (
          <VideoActions
            video={video}
            setSelectedId={setSelectedId}
            page={page}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </section>
      {isModalOpen && (
        <PlaylistModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} video={video} />
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  page: PropTypes.string.isRequired,
  selectedId: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  avatarId: PropTypes.number.isRequired
};

export { Thumbnail };
