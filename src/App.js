import "./App.css";
import { Main } from "./pages";
import { Sidebar, MobileBottomSidebar, MobileTopSidebar } from "./components";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <MobileBottomSidebar />
      <MobileTopSidebar />
      <Main />
    </div>
  );
};

export default App;
