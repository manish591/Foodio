import React, { useState } from "react";
import "./VideoPage.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { HorizontalCard, NotesCard } from "../../components";
import {
  useStateContext,
  useAppServices,
  useAuthContext,
  useScrollToTop,
} from "../../hooks";
import { PlaylistModal } from "../playlist/PlaylistModal";
import { ACTION_TYPES } from "../../reducer";

const VideoPage = () => {
  const { state, stateDispatch } = useStateContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    addToLikeVideos,
    removeFromLikedVideos,
    isAlreadyInDatabaseVideo,
    addToWatchLater,
    removeFromWatchLater,
    addToHistory,
  } = useAppServices();

  const { videoId } = useParams();
  const video = state.videos.find((item) => item._id === videoId);
  const { author, title, views } = video;

  useScrollToTop();

  return (
    <div className="video-page">
      <div className="video-page__main grid">
        <div className="video-page__show-vodeo">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoId}`}
            controls
            width="100%"
            height="480px"
            onStart={() => {
              stateDispatch({
                type: ACTION_TYPES.UPDATE_VIEWS,
                payload: { video },
              });
              addToHistory({ video });
            }}
          />
        </div>
        <div className="video-page__notes">
          <NotesCard />
        </div>
      </div>
      <div className="video-page__additionals grid">
        <section className="video-page__description vd-desc">
          <div className="vd-desc__left grid">
            <section className="vd-desc__profile flex">
              <div className="avatar avatar--large avatar--initial">
                <p>SK</p>
              </div>
              <div>
                <h3>{author}</h3>
                <p>255k Subscriber</p>
              </div>
            </section>
            <section>
              <h1 className="video-page__title">{title}</h1>
            </section>
            <section>
              <p className="video-page__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                ipsa quidem atque quas laborum, optio qui soluta illum
                reiciendis nostrum.
              </p>
            </section>
          </div>
          <div className="vd-desc__right vp-actions">
            <section className="vp-actions__top flex">
              {isAlreadyInDatabaseVideo(state.library.likedVideos, videoId) ? (
                <button
                  className="vp-actions__icon"
                  title="Liked"
                  onClick={() => {
                    removeFromLikedVideos({ videoId });
                  }}
                >
                  <span className="material-icons-outlined">favorite</span>
                </button>
              ) : (
                <button
                  className="vp-actions__icon"
                  title="Liked"
                  onClick={() => {
                    addToLikeVideos({ video });
                  }}
                >
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                </button>
              )}
              <button className="vp-actions__icon" title="Share">
                <span className="material-icons-outlined">share</span>
              </button>
              {isAlreadyInDatabaseVideo(state.library.watchLater, videoId) ? (
                <button
                  className="vp-actions__icon"
                  title="Watch Later"
                  onClick={() => {
                    removeFromWatchLater({ videoId });
                  }}
                >
                  <span className="material-icons">watch_later</span>
                </button>
              ) : (
                <button
                  className="vp-actions__icon"
                  title="Watch Later"
                  onClick={() => {
                    addToWatchLater({ video });
                  }}
                >
                  <span className="material-icons-outlined">watch_later</span>
                </button>
              )}
              <button
                className="vp-actions__icon"
                title="Add To Playlist"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <span className="material-icons-outlined">playlist_add</span>
              </button>
            </section>
            <section className="vp-actions__bottom grid">
              <div
                className="flex"
                style={{
                  alignItems: "center",
                }}
              >
                <span className="material-icons-outlined">visibility</span>
                <p style={{ whiteSpace: "nowrap" }}>{views} Views</p>
              </div>
              <div
                className="flex"
                style={{ alignItems: "center", opacity: "0.6" }}
              >
                <span className="material-icons-outlined">thumb_up</span>
                <p style={{ whiteSpace: "nowrap" }}>1016 Likes</p>
              </div>
              <div
                className="flex"
                style={{ alignItems: "center", opacity: "0.6" }}
              >
                <span className="material-icons-outlined">
                  chat_bubble_outline
                </span>
                <p style={{ whiteSpace: "nowrap" }}>75 Comments</p>
              </div>
              <div
                className="flex"
                style={{ alignItems: "center", opacity: "0.6" }}
              >
                <span className="material-icons-outlined">event</span>
                <p style={{ whiteSpace: "nowrap" }}>Dec 20, 2022</p>
              </div>
            </section>
          </div>
        </section>
        <section className="video-page__related-video related-vd">
          <h3 className="related-vd__title">Related Videos</h3>
          <div className="related-vd__container grid">
            <HorizontalCard />
            <HorizontalCard />
          </div>
        </section>
      </div>
      <PlaylistModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        video={video}
      />
    </div>
  );
};

export { VideoPage };
