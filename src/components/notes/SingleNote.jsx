import React from "react";

const SingleNote = () => {
  return (
    <div className="your-notes__card single-note">
      <h4 className="single-note__title">Your Note Title</h4>
      <p className="single-note__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, officiis?
      </p>
      <div className="single-note__actions flex">
        <button className="single-note__edit">
          <span className="material-icons-outlined">edit</span>
        </button>
        <button className="single-note__delete">
          <span className="material-icons-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};

export { SingleNote };
