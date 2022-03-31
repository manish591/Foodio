import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks";

const PlaylistModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatePlaylistMode, setIsCreatePlaylistMode] = useState(false);
  const { myToken } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/playlists", {
          headers: {
            authorization: myToken,
          },
        });
        console.log(res);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, []);

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
        </form>
        <div
          className="dialog__cta dialog__cta--confirm"
          style={{ flexDirection: "column" }}
        >
          {isCreatePlaylistMode ? (
            <div className="dialog__create-playlist">
              <section>
                <label htmlFor="playlist-title">Playlist Title</label>
                <input type="text" id="playlist-title" />
              </section>
              <button className="playlist-create-enter btn btn--text">
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
