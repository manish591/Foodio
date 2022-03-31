import React from "react";

const PlaylistModal = ({ isModalOpen, setIsModalOpen }) => {
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
        <div className="dialog__cta dialog__cta--confirm">
          <button className="dialog__action-btn dialog__action-btn--gap-top flex">
            <span className="material-icons">add</span>
            <p>Create New Playlist</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export { PlaylistModal };
