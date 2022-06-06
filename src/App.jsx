import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  Main,
  NotFound,
  PlaylistListing,
  VideoListing,
  Login,
  Signup,
  LikedVideos,
  History,
  WatchLater,
  Playlist,
  Home,
  VideoPage,
  UserProfile,
  SearchResults,
  Uploads
} from 'pages';
import { ProtectedRoute, RedirectRoute } from 'components';
import { useKeepAuth, useScrollToTop } from 'hooks';

const App = () => {
  useKeepAuth();
  useScrollToTop();

  return (
    <div className="App">
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'var(--text2)',
            color: 'var(--surface2)'
          }
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Home />
            </RedirectRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/explore" element={<Main />}>
          <Route index element={<VideoListing />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="watch/:videoId" element={<VideoPage />} />
          <Route
            path="liked"
            element={
              <ProtectedRoute>
                <LikedVideos />
              </ProtectedRoute>
            }
          />
          <Route
            path="history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="playlist"
            element={
              <ProtectedRoute>
                <Playlist />
              </ProtectedRoute>
            }
          />
          <Route path="playlist/list/:playlistId" element={<PlaylistListing />} />
          <Route
            path="watchlater"
            element={
              <ProtectedRoute>
                <WatchLater />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="uploads"
            element={
              <ProtectedRoute>
                <Uploads />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
