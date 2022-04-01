import React, { useState } from "react";
import "./Thumbnail.css";
import { VideoActions } from "../video-action/VideoActions";
import { useNavigate } from "react-router-dom";
import { PlaylistModal } from "../../pages";
import { getInitials } from "../../utilis";

const Thumbnail = ({ video, selectedId, setSelectedId, page }) => {
  const navigate = useNavigate();
  const { _id, title, videoUrl, category, author = "Manish Devrani" } = video;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="thumbnail">
      <section
        className="thumbnail__image-container"
        onClick={() => navigate(`/explore/watch/${_id}`)}
      >
        <img
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ`}
          alt="thumbnail"
          className="thumbnail__img"
        />
      </section>
      <section className="thumbnail__content th-content flex">
        <div
          className="th-content__profile"
          onClick={() => navigate(`/explore/watch/${_id}`)}
        >
          <div
            className="avatar avatar--large avatar--initial"
            onClick={() => navigate(`/explore/watch/${_id}`)}
          >
            <p>{getInitials(author)}</p>
          </div>
        </div>
        <div
          className="th-content__description"
          onClick={() => navigate(`/explore/watch/${_id}`)}
        >
          <h3 className="thumbnail__title">{title}</h3>
          <p className="thumbnail__author">{author}</p>
          <span className="thumbnail__counts">12M views - 2 days ago</span>
        </div>
        <div
          className="th-content__actions"
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
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </section>
      {isModalOpen && (
        <PlaylistModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          video={video}
        />
      )}
    </div>
  );
};

export { Thumbnail };
