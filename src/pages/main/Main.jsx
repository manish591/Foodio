import React, { useState } from 'react';
import { useScrollToTop } from 'hooks';
import { Outlet } from 'react-router-dom';
import { Sidebar, Navbar, MobileBottomSidebar, MobileTopSidebar, UploadForm } from 'components';

const Main = () => {
  const [isUploadFormOpen, setIsUploadFormOpen] = useState(false);
  useScrollToTop();

  return (
    <div className="main-ar">
      <Sidebar />
      <MobileBottomSidebar setIsUploadFormOpen={setIsUploadFormOpen} />
      {isUploadFormOpen ? <UploadForm setIsUploadFormOpen={setIsUploadFormOpen} /> : null}
      <MobileTopSidebar />
      <div className="main-ar__feed">
        <Navbar setIsUploadFormOpen={setIsUploadFormOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export { Main };
