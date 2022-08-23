import React, { useState, useEffect } from 'react';
import './VideoPage.css';
import axios from 'axios';
import ReactPlayer from 'react-player';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { HorizontalCard, NotesCard } from 'components';
import { useStateContext, useAppServices, useScrollToTop, useAuthContext } from 'hooks';
import { PlaylistModal } from '../playlist/PlaylistModal';

const VideoPage = () => {
  const [myNotes, setMyNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const { state } = useStateContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { library } = state;
  const { notes } = library;
  const {
    addToLikeVideos,
    removeFromLikedVideos,
    isAlreadyInDatabaseVideo,
    addToWatchLater,
    removeFromWatchLater,
    addToHistory,
    updateVideoViews
  } = useAppServices();

  const { videoId } = useParams();
  const video = state.videos.find((item) => item._id === videoId);

  const { isUserLogedIn, myToken } = useAuthContext();

  const relatedVideos = () => {
    return state.videos.filter(
      (item) => item.category === video.category && item._id !== video._id
    );
  };

  useScrollToTop();

  useEffect(() => {
    if (!isUserLogedIn) return;
    (async () => {
      try {
        const res = await axios.get(`/api/user/notes`, {
          headers: {
            authorization: myToken
          }
        });
        if (res.status === 200) {
          setMyNotes(res.data.notes);
        }
      } catch (err) {
        toast.error('Unable to get notes data');
      }
    })();
  }, [notes]);

  return (
    <div className="video-page">
      <div className="video-page__main grid">
        <div className="video-page__show-video">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/embed/${videoId}`}
            controls
            width="100%"
            height="100%"
            onStart={() => {
              addToHistory({ video });
              updateVideoViews({ video });
            }}
          />
          <button
            type="button"
            className="show-notes-mobile"
            onClick={() => {
              setShowNotes((note) => !note);
            }}>
            Add Notes
          </button>
        </div>
        <div className={`video-page__notes ${showNotes && 'video-page__notes--show'}`}>
          <NotesCard videoId={videoId} myNotes={myNotes} />
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
                <h3>{video?.author}</h3>
                <p>255k Subscriber</p>
              </div>
            </section>
            <section>
              <h1 className="video-page__title">{video?.title}</h1>
            </section>
            <section>
              <p className="video-page__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa quidem atque quas
                laborum, optio qui soluta illum reiciendis nostrum.
              </p>
            </section>
          </div>
          <div className="vd-desc__right vp-actions">
            <section className="vp-actions__top flex">
              {isAlreadyInDatabaseVideo(state.library.likedVideos, videoId) ? (
                <button
                  type="button"
                  className="vp-actions__icon"
                  title="Liked"
                  onClick={() => {
                    removeFromLikedVideos({ videoId });
                  }}>
                  <span className="material-icons-outlined">favorite</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="vp-actions__icon"
                  title="Liked"
                  onClick={() => {
                    addToLikeVideos({ video });
                  }}>
                  <span className="material-icons-outlined">favorite_border</span>
                </button>
              )}
              {isAlreadyInDatabaseVideo(state.library.watchLater, videoId) ? (
                <button
                  type="button"
                  className="vp-actions__icon"
                  title="Watch Later"
                  onClick={() => {
                    removeFromWatchLater({ videoId });
                  }}>
                  <span className="material-icons">watch_later</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="vp-actions__icon"
                  title="Watch Later"
                  onClick={() => {
                    addToWatchLater({ video });
                  }}>
                  <span className="material-icons-outlined">watch_later</span>
                </button>
              )}
              <button
                type="button"
                className="vp-actions__icon"
                title="Add To Playlist"
                onClick={() => {
                  setIsModalOpen(true);
                }}>
                <span className="material-icons-outlined">playlist_add</span>
              </button>
            </section>
            <section className="vp-actions__bottom grid">
              <div
                className="flex"
                style={{
                  alignItems: 'center'
                }}>
                <span className="material-icons-outlined">visibility</span>
                <p style={{ whiteSpace: 'nowrap' }}>{video?.views} Views</p>
              </div>
              <div className="flex" style={{ alignItems: 'center', opacity: '0.6' }}>
                <span className="material-icons-outlined">thumb_up</span>
                <p style={{ whiteSpace: 'nowrap' }}>1016 Likes</p>
              </div>
              <div className="flex" style={{ alignItems: 'center', opacity: '0.6' }}>
                <span className="material-icons-outlined">chat_bubble_outline</span>
                <p style={{ whiteSpace: 'nowrap' }}>75 Comments</p>
              </div>
              <div className="flex" style={{ alignItems: 'center', opacity: '0.6' }}>
                <span className="material-icons-outlined">event</span>
                <p style={{ whiteSpace: 'nowrap' }}>Dec 20, 2022</p>
              </div>
            </section>
          </div>
        </section>
        <section className="video-page__related-video related-vd">
          <h3 className="related-vd__title">Related Videos</h3>
          <div className="related-vd__container grid">
            {relatedVideos &&
              relatedVideos().map((item) => {
                // eslint-disable-next-line react/jsx-props-no-spreading
                return <HorizontalCard key={item.id} {...item} />;
              })}
          </div>
        </section>
      </div>
      <PlaylistModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} video={video} />
    </div>
  );
};

export { VideoPage };
