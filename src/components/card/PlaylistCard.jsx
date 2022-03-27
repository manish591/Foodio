import React from "react";
import "./PlaylistCard.css";

const PlaylistCard = () => {
  return (
    <div className="playlist-card">
      <section className="playlist-card__image-container">
        <img
          src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="playlist-card__img"
        />
        <div className="playlist-card__count flex">
          <p>2</p>
          <span class="material-icons-outlined">playlist_play</span>
        </div>
      </section>
      <section className="playlist-card__content plcd-content flex">
        <div className="plcd-content__description">
          <h3 className="playlist-card__title">My Playlist Title</h3>
        </div>
        <div className="plcd-content__actions">
          <span class="material-icons-outlined">more_vert</span>
        </div>
      </section>
    </div>
  );
};

export { PlaylistCard };
