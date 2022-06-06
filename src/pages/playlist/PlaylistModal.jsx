import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useAuthContext, useAppServices, useStateContext } from 'hooks';

const PlaylistModal = ({ isModalOpen, setIsModalOpen, video }) => {
  const [isCreatePlaylistMode, setIsCreatePlaylistMode] = useState(false);
  const [createPlaylistInput, setCreatePlaylistInput] = useState('');
  const { myToken } = useAuthContext();
  const { createPlaylists, addVideoToPlaylist, isVideoInPlaylist, deleteVideoFromPlaylist } =
    useAppServices();
  const [myPlaylistData, setMyPlaylistData] = useState([]);
  const { state } = useStateContext();
  const { library } = state;
  const { playlist } = library;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/user/playlists', {
          headers: {
            authorization: myToken
          }
        });
        if (res.status === 200) {
          setMyPlaylistData(res.data.playlists);
        }
      } catch (err) {
        toast.error('Unable to get playlist data');
      }
    })();
  }, [playlist]);

  return (
    <section className={`dialog dialog--confirmation ${isModalOpen ? '' : 'dialog--hide'}`}>
      <div
        className="dialog-overlay"
        tabIndex={0}
        onKeyUp={() => setIsModalOpen(false)}
        onClick={() => setIsModalOpen(false)}
        role="button"
        style={{ zIndex: '15' }}>
        &nbsp;
      </div>
      <div
        className="dialog-data"
        style={{ zIndex: '16', left: '50%', backgroundColor: 'var(--surface1)' }}>
        <div className="dialog__content">
          <div className="dialog__info dialog__info--confirm">
            <p className="dialog__header dialog__header--confirm">Save To...</p>
          </div>
          <form className="dialog__form">
            <div className="dialog__input-area dialog__input-area--flex">
              <input type="checkbox" name="item" id="item1" className="dialog__input" />
              <label htmlFor="item1">Watch Later</label>
            </div>
            {myPlaylistData.map((item) => {
              return (
                <div className="dialog__input-area dialog__input-area--flex" key={item._id}>
                  <input
                    type="checkbox"
                    name="item"
                    id={`item${item._id}`}
                    checked={!!isVideoInPlaylist(video._id, item._id)}
                    onChange={() => {
                      if (isVideoInPlaylist(video._id, item._id)) {
                        deleteVideoFromPlaylist({
                          videoId: video._id,
                          playlistId: item._id
                        });
                      } else {
                        addVideoToPlaylist({ playlistId: item._id, video });
                      }
                    }}
                    className="dialog__input"
                  />
                  <label htmlFor={`item${item._id}`}>{item.title}</label>
                </div>
              );
            })}
          </form>
          <div className="dialog__cta dialog__cta--confirm" style={{ flexDirection: 'column' }}>
            {isCreatePlaylistMode ? (
              <div className="dialog__create-playlist">
                <section>
                  <label htmlFor="playlist-title">Playlist Title</label>
                  <input
                    type="text"
                    id="playlist-title"
                    value={createPlaylistInput}
                    onChange={(e) => setCreatePlaylistInput(e.target.value)}
                  />
                </section>
                <button
                  type="button"
                  className="playlist-create-enter btn btn--text"
                  onClick={() => {
                    if (createPlaylistInput !== '') {
                      createPlaylists({
                        title: createPlaylistInput,
                        description: 'random'
                      });
                      setIsCreatePlaylistMode(false);
                    } else {
                      toast.error('Please add a playlist title');
                    }
                  }}>
                  Create
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="dialog__action-btn dialog__action-btn--gap-top flex"
                onClick={() => {
                  setIsCreatePlaylistMode(true);
                }}>
                <span className="material-icons">add</span>
                <p>Create New Playlist</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

PlaylistModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired
};

export { PlaylistModal };
