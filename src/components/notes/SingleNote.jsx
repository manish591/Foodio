import React from "react";
import { useAppServices } from "../../hooks";

const SingleNote = ({ videoId, title, body, _id }) => {
  const { deleteNoteFromVideo } = useAppServices();

  return (
    <div className="your-notes__card single-note">
      <h4 className="single-note__title">{title}</h4>
      <p className="single-note__desc">{body}</p>
      <div className="single-note__actions flex">
        <button className="single-note__edit">
          <span className="material-icons-outlined">edit</span>
        </button>
        <button className="single-note__delete">
          <span
            className="material-icons-outlined"
            onClick={() => {
              deleteNoteFromVideo({ noteId: _id });
            }}
          >
            delete
          </span>
        </button>
      </div>
    </div>
  );
};

export { SingleNote };
