import React from "react";
import "./UploadForm.css";

const UploadForm = ({ setIsUploadFormOpen }) => {
  return (
    <div className="upload-form">
      <div className="upload-form__wrappper">
        <form className="grid">
          <h2 className="upload-form__title">Upload Video</h2>
          <section className="upload-form__group">
            <label htmlFor="url" className="upload-form__label">
              Youtube Video Url
            </label>
            <input type="text" id="url" className="upload-form__input" />
          </section>
          <section className="upload-form__group">
            <label htmlFor="title" className="upload-form__label">
              Title
            </label>
            <input type="text" id="title" className="upload-form__input" />
          </section>
          <section className="upload-form__group">
            <label htmlFor="category" className="upload-form__label">
              Category
            </label>
            <input type="text" id="category" className="upload-form__input" />
          </section>
          <section className="upload-form__group">
            <label htmlFor="url" className="upload-form__label">
              Description
            </label>
            <textarea
              id="description"
              className="upload-form__input"
            ></textarea>
          </section>
          <button className="btn btn--contained-primary">Upload Video</button>
        </form>
      </div>
    </div>
  );
};

export { UploadForm };
