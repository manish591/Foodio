import React from "react";

import {
  Sidebar,
  Navbar,
  MobileBottomSidebar,
  MobileTopSidebar,
} from "../../components";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-ar">
      <Sidebar />
      <MobileBottomSidebar />
      <MobileTopSidebar />
      <div className="main-ar__feed">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export { Main };
