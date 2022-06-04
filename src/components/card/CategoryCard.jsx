import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = ({ categoryName }) => {
  const navigate = useNavigate();

  return (
    <section
      className="card card--text-over-media"
      style={{
        inlineSize: '100%',
        position: 'relative',
        blockSize: '100%'
      }}
      onClick={() => navigate('/explore', { state: categoryName })}
      onKeyUp={() => navigate('/explore', { state: categoryName })}
      role="button"
      tabIndex={0}>
      <div className="card__content-above" style={{ bottom: '10%' }}>
        <h3
          className="card__title"
          style={{
            color: 'var(--text2)',
            marginBlockEnd: '2rem',
            fontSize: 'var(--fs-800)'
          }}>
          {categoryName}
        </h3>
        <p className="card__author" style={{ color: 'var(--text2)' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iusto voluptatem veniam
          magni similique voluptas mollitia neque excepturi! Recusandae, aliquid!
        </p>
      </div>
    </section>
  );
};

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired
};

export { CategoryCard };
