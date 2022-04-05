import "./App.css";
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
} from "./pages";

import { ProtectedRoute } from "./components";

import { Routes, Route } from "react-router-dom";
import { useKeepAuth, useScrollToTop } from "./hooks";

const App = () => {
  useKeepAuth();
  useScrollToTop();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/explore" element={<Main />}>
          <Route index element={<VideoListing />} />
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
          ></Route>
          <Route
            path="playlist/list/:playlistId"
            element={<PlaylistListing />}
          />
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
        </Route>
      </Routes>
    </div>
  );
};

export default App;
