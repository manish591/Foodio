import React from "react";
import "./PlaylistCard.css";
import { VideoActions } from "../video-action/VideoActions";

const PlaylistCard = ({ video, setSelectedId, selectedId, page }) => {
  const { _id, title, description, videos } = video;
  return (
    <div className="playlist-card">
      <section className="playlist-card__image-container">
        <img
          src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="playlist-card__img"
        />
        <div className="playlist-card__count flex">
          <p>{videos?.length}</p>
          <span class="material-icons-outlined">playlist_play</span>
        </div>
      </section>
      <section className="playlist-card__content plcd-content flex">
        <div className="plcd-content__description">
          <h3 className="playlist-card__title">{title}</h3>
        </div>
        <div
          className="plcd-content__actions"
          onClick={() =>
            setSelectedId((id) => {
              if (id !== _id) return _id;
              return id === "" ? _id : "";
            })
          }
        >
          <span class="material-icons-outlined">more_vert</span>
        </div>
        {selectedId === _id ? (
          <VideoActions
            video={video}
            setSelectedId={setSelectedId}
            page={page}
          />
        ) : null}
      </section>
    </div>
  );
};

export { PlaylistCard };
