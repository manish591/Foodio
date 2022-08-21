import React, { useState } from 'react';
import './UploadForm.css';
import { useAppServices, useStateContext } from 'hooks';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { isExistsInDatabase } from 'utilis';

async function isValidVideo(id) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = `https://i.ytimg.com/vi/${id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1dg5JXDycuG06NEn9A-0Pnd40zQ`;

    image.onload = function loading() {
      if (this.width === 120) {
        resolve('No such video found');
      }
      resolve('Video successfully added');
    };
  });
}

const UploadForm = ({ setIsUploadFormOpen }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    videoUrl: '',
    description: '',
    category: '',
    author: 'Manish Devrani'
  });

  const { uploadVideo } = useAppServices();
  const {
    state: {
      library: { uploads }
    }
  } = useStateContext();

  const handleUploadVideo = (e) => {
    e.preventDefault();
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
    const match = videoData.videoUrl.match(regExp);
    if (match && match[2].length === 11) {
      if (isExistsInDatabase(uploads, match[2])) {
        toast.error('Video already in the database');
        return;
      }
      isValidVideo(match[2]).then((res) => {
        if (res === 'No such video found') {
          toast.error('No video found');
        } else {
          uploadVideo(videoData);
          setIsUploadFormOpen(false);
        }
      });
    } else {
      toast.error('Please enter the correct video url!');
    }
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
          <button type="submit" className="btn btn--contained-primary upload-video-btn">
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
