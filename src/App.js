import "./App.css";
import { Main } from "./pages";
import {
  VideoListing,
  Login,
  Signup,
  LikedVideos,
  History,
  WatchLater,
  Playlist,
  Home,
} from "./pages";

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
          <Route path="liked" element={<LikedVideos />} />
          <Route path="history" element={<History />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="watchlater" element={<WatchLater />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
