import React from "react";
import "./NotesCard.css";
import { SingleNote } from "./SingleNote";

const NotesCard = () => {
  return (
    <div className="notes-card">
      <h3 className="notes-card__title">Add Notes</h3>
      <form className="notes-card__note-form note-form grid">
        <section className="note-form__group">
          <label htmlFor="title" className="sr-only">
            Add Your Title
          </label>
          <input type="text" placeholder="Your Title..." id="title" />
        </section>
        <section className="note-form__group">
          <label htmlFor="body" className="sr-only">
            Add Your Description
          </label>
          <textarea
            name="body"
            id="body"
            placeholder="Write Notes Here..."
          ></textarea>
        </section>
        <section className="notes-form__actions flex">
          <button className="btn btn--contained-primary">Add</button>
          <button className="btn btn--outlined-secondary">Discard</button>
        </section>
      </form>
      <section className="notes-card__your-cards your-notes">
        <h3>Your Notes</h3>
        <SingleNote />
        <SingleNote />
      </section>
    </div>
  );
};

export { NotesCard };
