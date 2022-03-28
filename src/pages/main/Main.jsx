import React from "react";

import { Navbar } from "../../components";
import {
  VideoListing,
  Login,
  Signup,
  LikedVideos,
  History,
  WatchLater,
  Playlist,
} from "../";

import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-ar">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export { Main };
