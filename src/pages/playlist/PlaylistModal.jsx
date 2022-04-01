import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks";
import { useAppServices } from "../../hooks";
import { useStateContext } from "../../hooks";

const PlaylistModal = ({ isModalOpen, setIsModalOpen, video }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatePlaylistMode, setIsCreatePlaylistMode] = useState(false);
  const [createPlaylistInput, setCreatePlaylistInput] = useState("");
  const { myToken } = useAuthContext();
  const {
    createPlaylists,
    addVideoToPlaylist,
    isVideoInPlaylist,
    deleteVideoFromPlaylist,
  } = useAppServices();
  const [myPlaylistData, setMyPlaylistData] = useState([]);
  const { state, stateDispatch } = useStateContext();
  const { library } = state;
  const { playlist } = library;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/playlists", {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setMyPlaylistData(res.data.playlists);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, [playlist]);

  return (
    <section
      className={`dialog dialog--confirmation ${
        isModalOpen ? "" : "dialog--hide"
      }`}
    >
      <div className="dialog__content">
        <span
          className="material-icons dialog__clear"
          onClick={() => setIsModalOpen(false)}
        >
          clear
        </span>
        <div className="dialog__info dialog__info--confirm">
          <p className="dialog__header dialog__header--confirm">Save To...</p>
        </div>
        <form className="dialog__form">
          <div className="dialog__input-area dialog__input-area--flex">
            <input
              type="checkbox"
              name="item"
              id="item1"
              className="dialog__input"
            />
            <label htmlFor="item1">Watch Later</label>
          </div>
          {myPlaylistData.map((item) => {
            console.log(isVideoInPlaylist(video._id, item._id));
            return (
              <div
                className="dialog__input-area dialog__input-area--flex"
                key={item._id}
              >
                <input
                  type="checkbox"
                  name="item"
                  id={`item${item._id}`}
                  checked={
                    isVideoInPlaylist(video._id, item._id) ? true : false
                  }
                  onChange={() => {
                    if (isVideoInPlaylist(video._id, item._id)) {
                      deleteVideoFromPlaylist({
                        videoId: video._id,
                        playlistId: item._id,
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
        <div
          className="dialog__cta dialog__cta--confirm"
          style={{ flexDirection: "column" }}
        >
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
                className="playlist-create-enter btn btn--text"
                onClick={() => {
                  if (setCreatePlaylistInput !== "") {
                    createPlaylists({
                      title: createPlaylistInput,
                      description: "random",
                    });
                    setIsCreatePlaylistMode(false);
                  }
                }}
              >
                Create
              </button>
            </div>
          ) : (
            <button
              className="dialog__action-btn dialog__action-btn--gap-top flex"
              onClick={() => {
                setIsCreatePlaylistMode(true);
              }}
            >
              <span className="material-icons">add</span>
              <p>Create New Playlist</p>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export { PlaylistModal };
