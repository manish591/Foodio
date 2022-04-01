import "./App.css";
import { Main, PlaylistListing } from "./pages";
import {
  VideoListing,
  Login,
  Signup,
  LikedVideos,
  History,
  WatchLater,
  Playlist,
  Home,
  VideoPage,
} from "./pages";

import { ProtectedRoute } from "./components";

import { Routes, Route } from "react-router-dom";
import { useKeepAuth } from "./hooks";

const App = () => {
  useKeepAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
        </Route>
      </Routes>
    </div>
  );
};

export default App;
