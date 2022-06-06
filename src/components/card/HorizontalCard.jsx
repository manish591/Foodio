import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const HorizontalCard = ({ _id, title, author }) => {
  const navigate = useNavigate();
  return (
    <section
      className="card card--horizontal"
      style={{
        inlineSize: '100%',
        backgroundColor: 'var(--surface2)',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={() => {
        navigate(`/explore/watch/${_id}`);
      }}
      onKeyUp={() => {
        navigate(`/explore/watch/${_id}`);
      }}
      role="button"
      tabIndex={0}>
      <div className="card__image-container">
        <img
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ`}
          alt=""
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title" style={{ fontSize: '0.8rem' }}>
          {title}
        </h3>
        <p className="card__author">{author}</p>
      </div>
    </section>
  );
};

HorizontalCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export { HorizontalCard };
