import React from 'react';
import { useAppServices } from 'hooks';
import PropTypes from 'prop-types';

const SingleNote = ({
  videoId,
  title,
  body,
  _id,
  setNotesData,
  setIsNoteEditing,
  setItemToEditID
}) => {
  const { deleteNoteFromVideo } = useAppServices();

  return (
    <div className="your-notes__card single-note">
      <h4 className="single-note__title">{title}</h4>
      <p className="single-note__desc">{body}</p>
      <div className="single-note__actions flex">
        <button
          type="button"
          className="single-note__edit"
          onClick={() => {
            setItemToEditID(_id);
            setIsNoteEditing(true);
            setNotesData({ title, body, videoId });
          }}>
          <span className="material-icons-outlined">edit</span>
        </button>
        <button
          type="button"
          className="single-note__delete"
          onClick={() => {
            deleteNoteFromVideo({ noteId: _id });
          }}>
          <span className="material-icons-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};

SingleNote.propTypes = {
  _id: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  setNotesData: PropTypes.func.isRequired,
  setIsNoteEditing: PropTypes.func.isRequired,
  setItemToEditID: PropTypes.func.isRequired
};

export { SingleNote };
