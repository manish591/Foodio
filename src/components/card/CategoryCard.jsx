import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = ({ categoryName, img, description }) => {
  const navigate = useNavigate();

  return (
    <section
      className="card card--text-over-media"
      style={{
        inlineSize: '100%',
        position: 'relative',
        blockSize: '100%',
        backgroundImage: `url('${img}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={() => navigate('/explore', { state: categoryName })}
      onKeyUp={() => navigate('/explore', { state: categoryName })}
      role="button"
      tabIndex={0}>
      <div
        className="card__content-above"
        style={{
          bottom: '10%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(30px)',
          inlineSize: '90%'
        }}>
        <h3
          className="card__title"
          style={{
            color: 'black',
            marginBlockEnd: '2rem',
            fontSize: 'var(--fs-800)'
          }}>
          {categoryName}
        </h3>
        <p className="card__author" style={{ color: 'black' }}>
          {description}
        </p>
      </div>
    </section>
  );
};

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export { CategoryCard };
