import React from "react";
import "./Thumbnail.css";
import { VideoActions } from "../video-action/VideoActions";
import { useNavigate } from "react-router-dom";

const Thumbnail = ({
  _id,
  title,
  videoUrl,
  category,
  author = "Manish Devrani",
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="thumbnail"
      onClick={() => navigate(`/explore/watch/${_id}`)}
    >
      <section className="thumbnail__image-container">
        <img
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ`}
          alt="thumbnail"
          className="thumbnail__img"
        />
      </section>
      <section className="thumbnail__content th-content flex">
        <div className="th-content__profile">
          <div className="avatar avatar--large avatar--initial">
            <p>SK</p>
          </div>
        </div>
        <div className="th-content__description">
          <h3 className="thumbnail__title">{title}</h3>
          <p className="thumbnail__author">{author}</p>
          <span className="thumbnail__counts">12M views - 2 days ago</span>
        </div>
        <div className="th-content__actions">
          <span className="material-icons-outlined">more_vert</span>
        </div>
      </section>
    </div>
  );
};

export { Thumbnail };
