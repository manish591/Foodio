import React, { useState } from 'react';
import './UploadForm.css';
import { useAppServices } from 'hooks';
import PropTypes from 'prop-types';

const UploadForm = ({ setIsUploadFormOpen }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    videoUrl: '',
    description: '',
    category: '',
    author: 'Manish Devrani'
  });

  const { uploadVideo } = useAppServices();

  const handleUploadVideo = (e) => {
    e.preventDefault();
    uploadVideo(videoData);
    setIsUploadFormOpen(false);
  };

  return (
    <div className="upload-form">
      <button
        type="button"
        className="upload-form__overlay"
        onClick={() => setIsUploadFormOpen(false)}>
        &nbsp;
      </button>
      <div className="upload-form__wrappper">
        <form className="grid" onSubmit={handleUploadVideo}>
          <h2 className="upload-form__title">Upload Video</h2>
          <section className="upload-form__group">
            <label htmlFor="url" className="upload-form__label">
              Youtube Video Url
            </label>
            <input
              type="text"
              id="url"
              className="upload-form__input"
              value={videoData.videoUrl}
              onChange={(e) => setVideoData({ ...videoData, videoUrl: e.target.value })}
              required
            />
          </section>
          <section className="upload-form__group">
            <label htmlFor="title" className="upload-form__label">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="upload-form__input"
              value={videoData.title}
              onChange={(e) => setVideoData({ ...videoData, title: e.target.value })}
              required
            />
          </section>
          <section className="upload-form__group">
            <label htmlFor="category" className="upload-form__label">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="upload-form__input"
              value={videoData.category}
              onChange={(e) => setVideoData({ ...videoData, category: e.target.value })}
              required
            />
          </section>
          <section className="upload-form__group">
            <label htmlFor="url" className="upload-form__label">
              Description
            </label>
            <textarea
              id="description"
              className="upload-form__input"
              value={videoData.description}
              onChange={(e) => setVideoData({ ...videoData, description: e.target.value })}
              required
            />
          </section>
          <button type="submit" className="btn btn--contained-primary">
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
};

UploadForm.propTypes = {
  setIsUploadFormOpen: PropTypes.func.isRequired
};

export { UploadForm };
