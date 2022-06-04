import React from 'react';

const HorizontalCard = () => {
  return (
    <section className="card card--horizontal" style={{ inlineSize: '100%' }}>
      <div className="card__image-container" style={{ objectFit: 'contain' }}>
        <img
          src="https://i.ytimg.com/vi/inVClSNYBQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ"
          alt=""
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">My Thumbnail Title</h3>
        <p className="card__author">by Manish Devrani</p>
        <p className="card__info">
          Visit ten places on our planet that are undergoing the biggest changes today.
        </p>
      </div>
    </section>
  );
};

export { HorizontalCard };
