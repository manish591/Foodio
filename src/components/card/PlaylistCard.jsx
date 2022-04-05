import React from "react";
import "./PlaylistCard.css";
import { VideoActions } from "../video-action/VideoActions";

import { useNavigate } from "react-router-dom";

const PlaylistCard = ({ video, setSelectedId, selectedId, page }) => {
  const { _id, title, description, videos } = video;

  const navigate = useNavigate();

  return (
    <div className="playlist-card">
      <section
        className="playlist-card__image-container"
        onClick={() => navigate(`/explore/playlist/list/${_id}`)}
      >
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
        <div
          className="plcd-content__actions"
          onClick={() =>
            setSelectedId((id) => {
              if (id !== _id) return _id;
              return id === "" ? _id : "";
            })
          }
        >
          <span className="material-icons-outlined">more_vert</span>
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
