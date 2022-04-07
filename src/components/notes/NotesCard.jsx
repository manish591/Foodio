import React, { useState } from "react";
import "./NotesCard.css";
import { SingleNote } from "./SingleNote";
import { useAppServices, useStateContext, useAuthContext } from "../../hooks";

const NotesCard = ({ videoId, myNotes }) => {
  const [notesData, setNotesData] = useState({
    title: "",
    body: "",
    videoId,
  });
  const [isNoteEditing, setIsNoteEditing] = useState(false);
  const [itemToEditID, setItemToEditID] = useState("");

  const { addNotesToVideo, editNote } = useAppServices();
  const { state } = useStateContext();
  const { isUserLogedIn } = useAuthContext();

  const handleAddNotes = (e) => {
    e.preventDefault();
    addNotesToVideo({ note: notesData });
    setNotesData({ title: "", body: "", videoId });
  };

  const notesArr = myNotes.filter((item) => item.videoId === videoId);

  return (
    <div className="notes-card">
      <h3 className="notes-card__title">Add Notes</h3>
      <form
        className="notes-card__note-form note-form grid"
        onSubmit={handleAddNotes}
      >
        <section className="note-form__group">
          <label htmlFor="title" className="sr-only">
            Add Your Title
          </label>
          <input
            type="text"
            placeholder="Your Title..."
            id="title"
            value={notesData.title}
            onChange={(e) =>
              setNotesData({ ...notesData, title: e.target.value })
            }
            required
          />
        </section>
        <section className="note-form__group">
          <label htmlFor="body" className="sr-only">
            Add Your Description
          </label>
          <textarea
            name="body"
            id="body"
            placeholder="Write Notes Here..."
            value={notesData.body}
            onChange={(e) =>
              setNotesData({ ...notesData, body: e.target.value })
            }
            required
          ></textarea>
        </section>
        <section className="notes-form__actions flex">
          {isNoteEditing ? (
            <button
              className="btn btn--contained-primary"
              type="button"
              onClick={() => {
                editNote({ noteId: itemToEditID, note: notesData });
                setNotesData({ title: "", body: "", videoId });
                setIsNoteEditing(false);
              }}
            >
              Update
            </button>
          ) : (
            <button className="btn btn--contained-primary">Add</button>
          )}
          <button
            className="btn btn--outlined-secondary"
            type="button"
            onClick={() => {
              setNotesData({ title: "", body: "", videoId });
            }}
          >
            Discard
          </button>
        </section>
      </form>
      <section className="notes-card__your-cards your-notes">
        {!isUserLogedIn ? (
          <h3>Login To Add Notes</h3>
        ) : notesArr?.length < 1 ? (
          <h3>Add Your First Note</h3>
        ) : (
          <>
            <h1>Your Notes</h1>
            {notesArr.map((item) => {
              return (
                <SingleNote
                  {...item}
                  key={item._id}
                  setNotesData={setNotesData}
                  notesData={notesData}
                  setItemToEditID={setItemToEditID}
                  setIsNoteEditing={setIsNoteEditing}
                />
              );
            })}
          </>
        )}
      </section>
    </div>
  );
};

export { NotesCard };
