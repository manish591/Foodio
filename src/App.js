import "./App.css";
import { VideoListing } from "./pages";
import { Sidebar } from "./components";
import { MobileBottomSidebar } from "./components";
import { MobileTopSidebar } from "./components";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <VideoListing />
      <MobileBottomSidebar />
      <MobileTopSidebar />
    </div>
  );
};

export default App;
