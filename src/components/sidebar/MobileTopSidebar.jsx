import React from "react";
import "./MobileTopSidebar.css";

const MobileTopSidebar = () => {
  return (
    <div className="mobile-top-sidebar mt-sidebar">
      <section className="mt-sidebar__shown">
        <div className="mt-sidebar__top flex">
          <div className="mt-sidebar__icon">
            <span className="material-icons-outlined">clear</span>
          </div>
          <h1 className="mt-sidebar__logo">foodio</h1>
        </div>
        <div className="mt-sidebar__bottom"></div>
      </section>
      <section className="mt-sidebar__hidden"></section>
    </div>
  );
};

export { MobileTopSidebar };
