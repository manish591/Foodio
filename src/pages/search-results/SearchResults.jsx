import React, { useState } from 'react';
import './SearchResults.css';
import { Link, useSearchParams } from 'react-router-dom';
import { Thumbnail } from '../../components';
import { useStateContext } from '../../hooks';

const SearchResults = () => {
  const [selectedId, setSelectedId] = useState('');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams?.get('query');
  const { state } = useStateContext();

  const searchResultsList = state.videos.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-results">
      <div className="search-results__wrapper">
        <h2 className="search-results__title fw-100">
          Showing Search Results for <strong>&quot;{searchQuery}</strong>&quot;
        </h2>
        {searchResultsList.length < 1 ? (
          <section className="search-result__not-found search-not-found">
            <h1 className="search-not-found__title">No Videos found</h1>
            <Link to="/explore" className="btn btn--contained-primary search-not-found__back">
              Go Back
            </Link>
          </section>
        ) : (
          <section className="search-results__container grid">
            {searchResultsList.map((item) => {
              return (
                <Thumbnail
                  key={item._id}
                  video={item}
                  page="Search"
                  setSelectedId={setSelectedId}
                  selectedId={selectedId}
                />
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
};

export { SearchResults };
